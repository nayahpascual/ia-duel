import { reviewApiUrl, chatGptApiUrl } from "../../../utils/api/setup"
import { userReview, askAPIs } from "../interfaces"

export async function fetchAskChatGpt(askAPIs: askAPIs, model: string) {
  const apiRequestBody = {
    model: model,
    messages: [{ role: "user", content: askAPIs.query }],
  }

  const setup = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + askAPIs.chatGptApiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiRequestBody),
  }
  return fetch(chatGptApiUrl, setup)
}

export function fetchSendReview(userReview: userReview) {
  const setup = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userReview),
  }
  return fetch(`${reviewApiUrl}/review`, setup)
}

export function fetchGetReviews() {
  const setup = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
  return fetch(`${reviewApiUrl}/review`, setup)
}
