import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"
import { RootState } from "../../../app/store"
import { fetchAskChatGpt, fetchSendReview, fetchGetReviews } from "./compareAPI"
import { userReview, compareState, askAPIs } from "../interfaces"
import { showError, showMessage } from "../../../utils/functions/toasts"
import promiseAllElapsedTime, {
  promiseAllTimesResponse,
} from "../../../utils/functions/promises"
import processReviews from "../../../utils/functions/stats"

const initialState: compareState = {
  globalStep: 0,
  userId: uuid(),
  apis: {
    chatGptApiKey: "",
    query: "",
    gptThreeAnswer: "",
    gptThreeAnswerTime: 0,
    gptFourAnswer: "",
    gptFourAnswerTime: 0,
    askApisStatus: "idle",
  },
  review: {
    bestModel: "none",
    askReviewStatus: "idle",
  },
  stats: [
    { name: "gpt-3.5-turbo", value: 0 },
    { name: "gpt-4", value: 0 },
  ],
}

// Async thunks
export const askIaAsync = createAsyncThunk(
  "counter/fetchAskIa",
  async (askAPIs: askAPIs) => {
    try {
      const startTime = Date.now()
      const asyncApiCalls = [
        fetchAskChatGpt(askAPIs, "gpt-3.5-turbo"),
        fetchAskChatGpt(askAPIs, "gpt-4"),
      ]
      const apisCallResults: promiseAllTimesResponse[] =
        await promiseAllElapsedTime(asyncApiCalls, startTime)

      return apisCallResults
    } catch (e) {
      showError("Error connecting with APIs")
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
      showError("Error sending your review")
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
        state.apis.askApisStatus = "loading"
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
          showError("Error with APIs response")
        }
        state.apis.askApisStatus = "idle"
      })

      .addCase(askIaAsync.rejected, (state) => {
        state.apis.askApisStatus = "failed"
      })
      // Review Calls
      .addCase(sendReviewAsync.pending, (state) => {
        state.review.askReviewStatus = "loading"
      })
      .addCase(sendReviewAsync.fulfilled, (state, action) => {
        state.stats = processReviews(action.payload)
        showMessage("Thanks for your review!")
        state.globalStep = 2
        state.review.askReviewStatus = "idle"
      })
      .addCase(sendReviewAsync.rejected, (state) => {
        state.review.askReviewStatus = "failed"
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
