export interface userReview {
  userId: string
  bestModel: string
}

export interface askAPIs {
  chatGptApiKey: string
  query: string
}

export interface stat {
  name: string
  value: number
}

export interface compareState {
  globalStep: number
  userId: string
  chatGptApiKey: string
  query: string
  gptThreeAnswer: string
  gptThreeAnswerTime: number
  gptFourAnswer: string
  gptFourAnswerTime: number
  askApisStatus: "idle" | "loading" | "failed"
  bestModel: string
  askReviewStatus: "idle" | "loading" | "failed"
  stats: stat[]
}
