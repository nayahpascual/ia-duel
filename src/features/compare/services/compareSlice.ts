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
  chatGptApiKey: "",
  query: "",
  gptThreeAnswer: "",
  gptThreeAnswerTime: 0,
  gptFourAnswer: "",
  gptFourAnswerTime: 0,
  askApisStatus: "idle",
  askReviewStatus: "idle",
  bestModel: "none",
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
      state.chatGptApiKey = action.payload
    },
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setGptThreeAnswer: (state, action) => {
      state.gptThreeAnswer = action.payload
    },
    setGptFourAnswer: (state, action) => {
      state.gptFourAnswer = action.payload
    },
    setBestModel: (state, action) => {
      state.bestModel = action.payload
    },
  },
  // Extra reducers for async thunks
  extraReducers: (builder) => {
    builder
      // Ask IAs Calls
      .addCase(askIaAsync.pending, (state) => {
        state.askApisStatus = "loading"
      })
      .addCase(askIaAsync.fulfilled, (state, action) => {
        if (action.payload && action.payload[0].response.choices) {
          state.gptThreeAnswer =
            action.payload[0].response.choices[0].message.content
          state.gptThreeAnswerTime = action.payload[0].elapseTimeMs
          state.gptFourAnswer =
            action.payload[1].response.choices[0].message.content
          state.gptFourAnswerTime = action.payload[1].elapseTimeMs
          state.globalStep = 1
        } else {
          showError("Error with APIs response")
        }
        state.askApisStatus = "idle"
      })

      .addCase(askIaAsync.rejected, (state) => {
        state.askApisStatus = "failed"
      })
      // Review Calls
      .addCase(sendReviewAsync.pending, (state) => {
        state.askReviewStatus = "loading"
      })
      .addCase(sendReviewAsync.fulfilled, (state, action) => {
        state.stats = processReviews(action.payload)
        showMessage("Thanks for your review!")
        state.globalStep = 2
        state.askReviewStatus = "idle"
      })
      .addCase(sendReviewAsync.rejected, (state) => {
        state.askReviewStatus = "failed"
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

// Export Selectors
export const selectUserId = (state: RootState) => state.compare.userId
export const selectChatGptApiKey = (state: RootState) =>
  state.compare.chatGptApiKey
export const selectQuery = (state: RootState) => state.compare.query
export const selectGptThreeAnswer = (state: RootState) =>
  state.compare.gptThreeAnswer
export const selectGptFourAnswer = (state: RootState) =>
  state.compare.gptFourAnswer
export const selectApisAskStatus = (state: RootState) =>
  state.compare.askApisStatus
export const selectBestModel = (state: RootState) => state.compare.bestModel
export const selectAskReviewStatus = (state: RootState) =>
  state.compare.askReviewStatus
export const selectGptThreeAnswerTime = (state: RootState) =>
  state.compare.gptThreeAnswerTime
export const selectGptFourAnswerTime = (state: RootState) =>
  state.compare.gptFourAnswerTime
export const selectStats = (state: RootState) => state.compare.stats
export const selectGlobalStep = (state: RootState) => state.compare.globalStep

export default compareSlice.reducer
