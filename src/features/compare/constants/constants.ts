import { compareState } from "../interfaces"
import { v4 as uuid } from "uuid"

export const CALL_STATUS_IDLE = "idle"
export const CALL_STATUS_LOADING = "loading"
export const CALL_STATUS_FAILED = "failed"

export const initialState: compareState = {
  globalStep: 0,
  userId: uuid(),
  apis: {
    chatGptApiKey: "",
    query: "",
    gptThreeAnswer: "",
    gptThreeAnswerTime: 0,
    gptFourAnswer: "",
    gptFourAnswerTime: 0,
    askApisStatus: CALL_STATUS_IDLE,
  },
  review: {
    bestModel: "none",
    askReviewStatus: CALL_STATUS_IDLE,
  },
  stats: [
    { name: "gpt-3.5-turbo", value: 0 },
    { name: "gpt-4", value: 0 },
  ],
}

export const API_MODELS = {
  gpt3: "gpt-3.5-turbo",
  gpt4: "gpt-4",
}
