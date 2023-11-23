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
type Status = "idle" | "loading" | "failed"
export interface compareState {
  globalStep: number
  userId: string
  apis: {
    chatGptApiKey: string
    query: string
    gptThreeAnswer: string
    gptThreeAnswerTime: number
    gptFourAnswer: string
    gptFourAnswerTime: number
    askApisStatus: Status
  }
  review: {
    bestModel: string
    askReviewStatus: Status
  }
  stats: stat[]
}
