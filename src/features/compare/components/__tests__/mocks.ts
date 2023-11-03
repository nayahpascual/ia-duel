export const chatGpt3Response = {
  id: "chatcmpl-8DxapWzpnwP6Gu2Z2HJjS64Vv3WGc",
  object: "chat.completion",
  created: 1698338031,
  model: "gpt-3.5-turbo-0613",
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content: "Hello! How can I assist you today?",
      },
      finish_reason: "stop",
    },
  ],
  usage: {
    prompt_tokens: 9,
    completion_tokens: 9,
    total_tokens: 18,
  },
}

export const chatGpt4Response = {
  id: "chatcmpl-8DxaplOnl76MoDA1Zed1MRoJzC9WS",
  object: "chat.completion",
  created: 1698338031,
  model: "gpt-4-0613",
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content: "Hello! How can I assist you today?",
      },
      finish_reason: "stop",
    },
  ],
  usage: {
    prompt_tokens: 9,
    completion_tokens: 9,
    total_tokens: 18,
  },
}

export const postReviewResponse = {
  userId: "d53266bc-af7d-4e28-b755-745d56aba75b",
  bestModel: "gpt-3.5-turbo",
  _id: "653ba73a2e0fb203e8541b52",
}

export const getReviewsResponse = [
  {
    _id: "653ba73a2e0fb203e8541b52",
    userId: "d53266bc-af7d-4e28-b755-745d56aba75b",
    bestModel: "gpt-3.5-turbo",
  },
  {
    _id: "653ba7c82e0fb203e8541b54",
    userId: "d53266bc-af7d-4e28-b755-745d56aba75b",
    bestModel: "gpt-4",
  },
  {
    _id: "653ba7ca2e0fb203e8541b55",
    userId: "d53266bc-af7d-4e28-b755-745d56aba75b",
    bestModel: "gpt-4",
  },
  {
    _id: "653ba7cc2e0fb203e8541b56",
    userId: "d53266bc-af7d-4e28-b755-745d56aba75b",
    bestModel: "gpt-4",
  },
  {
    _id: "653ba7ce2e0fb203e8541b57",
    userId: "d53266bc-af7d-4e28-b755-745d56aba75b",
    bestModel: "gpt-3.5-turbo",
  },
  {
    _id: "653ba7cf2e0fb203e8541b58",
    userId: "d53266bc-af7d-4e28-b755-745d56aba75b",
    bestModel: "gpt-3.5-turbo",
  },
  {
    _id: "653ba7d02e0fb203e8541b59",
    userId: "d53266bc-af7d-4e28-b755-745d56aba75b",
    bestModel: "gpt-3.5-turbo",
  },
]
