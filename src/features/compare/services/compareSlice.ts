import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import i18n from "../../../i18n"
import { RootState } from "../../../app/store"
import { fetchAskChatGpt, fetchSendReview, fetchGetReviews } from "./compareAPI"
import { userReview, askAPIs } from "../interfaces"
import { showError, showMessage } from "../../../utils/functions/toasts"
import promiseAllElapsedTime, {
  promiseAllTimesResponse,
} from "../../../utils/functions/promises"
import processReviews from "../../../utils/functions/stats"
import {
  CALL_STATUS_IDLE,
  CALL_STATUS_LOADING,
  CALL_STATUS_FAILED,
  API_MODELS,
  initialState,
} from "../constants/constants"

// Async thunks
export const askIaAsync = createAsyncThunk(
  "counter/fetchAskIa",
  async (askAPIs: askAPIs) => {
    try {
      const startTime = Date.now()
      const asyncApiCalls = [
        fetchAskChatGpt(askAPIs, API_MODELS.gpt3),
        fetchAskChatGpt(askAPIs, API_MODELS.gpt4),
      ]
      const apisCallResults: promiseAllTimesResponse[] =
        await promiseAllElapsedTime(asyncApiCalls, startTime)

      return apisCallResults
    } catch (e) {
      showError(i18n.t("error-connect-api"))
      return Promise.reject()
    }
  },
)

export const sendReviewAsync = createAsyncThunk(
  "counter/fetchRevew",
  async (userReview: userReview) => {
    try {
      // send review
      const sendReviewResponse = await fetchSendReview(userReview)
      await sendReviewResponse.json()
      // get all reviews
      const getReviws = await fetchGetReviews()
      const allReviews = await getReviws.json()
      return allReviews
    } catch (e) {
      showError(i18n.t("error-sending-review"))
      return Promise.reject()
    }
  },
)

// Slice
export const compareSlice = createSlice({
  name: "compare",
  initialState,
  // Normal reducers
  reducers: {
    setInitialState: (state) => {
      state = { ...initialState }
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setChatGptApiKey: (state, action) => {
      state.apis.chatGptApiKey = action.payload
    },
    setQuery: (state, action) => {
      state.apis.query = action.payload
    },
    setGptThreeAnswer: (state, action) => {
      state.apis.gptThreeAnswer = action.payload
    },
    setGptFourAnswer: (state, action) => {
      state.apis.gptFourAnswer = action.payload
    },
    setBestModel: (state, action) => {
      state.review.bestModel = action.payload
    },
  },
  // Extra reducers for async thunks
  extraReducers: (builder) => {
    builder
      // Ask IAs Calls
      .addCase(askIaAsync.pending, (state) => {
        state.apis.askApisStatus = CALL_STATUS_LOADING
      })
      .addCase(askIaAsync.fulfilled, (state, action) => {
        if (action.payload && action.payload[0].response.choices) {
          state.apis.gptThreeAnswer =
            action.payload[0].response.choices[0].message.content
          state.apis.gptThreeAnswerTime = action.payload[0].elapseTimeMs
          state.apis.gptFourAnswer =
            action.payload[1].response.choices[0].message.content
          state.apis.gptFourAnswerTime = action.payload[1].elapseTimeMs
          state.globalStep = 1
        } else {
          showError(i18n.t("error-api-response"))
        }
        state.apis.askApisStatus = CALL_STATUS_IDLE
      })

      .addCase(askIaAsync.rejected, (state) => {
        state.apis.askApisStatus = CALL_STATUS_FAILED
      })
      // Review Calls
      .addCase(sendReviewAsync.pending, (state) => {
        state.review.askReviewStatus = CALL_STATUS_LOADING
      })
      .addCase(sendReviewAsync.fulfilled, (state, action) => {
        state.stats = processReviews(action.payload)
        showMessage(i18n.t("thanks-review"))
        state.globalStep = 2
        state.review.askReviewStatus = CALL_STATUS_IDLE
      })
      .addCase(sendReviewAsync.rejected, (state) => {
        state.review.askReviewStatus = CALL_STATUS_FAILED
      })
  },
})

// Export Actions
export const {
  setInitialState,
  setUserId,
  setChatGptApiKey,
  setQuery,
  setGptThreeAnswer,
  setGptFourAnswer,
  setBestModel,
} = compareSlice.actions

export const selectors = {
  selectGlobalStep: (state: RootState) => state.compare.globalStep,
  selectUserId: (state: RootState) => state.compare.userId,
  selectChatGptApiKey: (state: RootState) => state.compare.apis.chatGptApiKey,
  selectQuery: (state: RootState) => state.compare.apis.query,
  selectGptThreeAnswer: (state: RootState) => state.compare.apis.gptThreeAnswer,
  selectGptFourAnswer: (state: RootState) => state.compare.apis.gptFourAnswer,
  selectApisAskStatus: (state: RootState) => state.compare.apis.askApisStatus,
  selectGptThreeAnswerTime: (state: RootState) =>
    state.compare.apis.gptThreeAnswerTime,
  selectGptFourAnswerTime: (state: RootState) =>
    state.compare.apis.gptFourAnswerTime,
  selectBestModel: (state: RootState) => state.compare.review.bestModel,
  selectAskReviewStatus: (state: RootState) =>
    state.compare.review.askReviewStatus,
  selectStats: (state: RootState) => state.compare.stats,
  selectApis: (state: RootState) => state.compare.apis,
  selectReview: (state: RootState) => state.compare.review,
}
export default compareSlice.reducer
