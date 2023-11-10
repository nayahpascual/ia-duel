import compareReducer, {
  setUserId,
  setChatGptApiKey,
  setQuery,
  setGptThreeAnswer,
  setGptFourAnswer,
  setBestModel,
} from "../compareSlice"
import { compareState } from "../../interfaces"

describe("compare reducer", () => {
  const initialState: compareState = {
    globalStep: 0,
    userId: "b1b11620-ad77-4c58-a227-75b083b2c083",
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
  it("should handle initial state", () => {
    expect(compareReducer(undefined, { type: "unknown" }).globalStep).toEqual(0)
    expect(compareReducer(undefined, { type: "unknown" }).apis).toEqual(
      expect.objectContaining({
        chatGptApiKey: "",
        query: "",
        gptThreeAnswer: "",
        gptThreeAnswerTime: 0,
        gptFourAnswer: "",
        gptFourAnswerTime: 0,
        askApisStatus: "idle",
      }),
    )
    expect(compareReducer(undefined, { type: "unknown" }).review).toEqual(
      expect.objectContaining({
        bestModel: "none",
        askReviewStatus: "idle",
      }),
    )
    expect(compareReducer(undefined, { type: "unknown" }).stats).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "gpt-3.5-turbo",
          value: 0,
        }),
        expect.objectContaining({
          name: "gpt-4",
          value: 0,
        }),
      ]),
    )
  })

  it("should set the userId", () => {
    const actual = compareReducer(initialState, setUserId("000001"))
    expect(actual.userId).toEqual("000001")
  })

  it("should set the ChatGPT API Key", () => {
    const actual = compareReducer(initialState, setChatGptApiKey("AAAAABBBBB"))
    expect(actual.apis.chatGptApiKey).toEqual("AAAAABBBBB")
  })

  it("should set the user query", () => {
    const actual = compareReducer(initialState, setQuery("Say Hello"))
    expect(actual.apis.query).toEqual("Say Hello")
  })

  it("should set the gpt3 answer", () => {
    const actual = compareReducer(initialState, setGptThreeAnswer("Hello !"))
    expect(actual.apis.gptThreeAnswer).toEqual("Hello !")
  })

  it("should set the gpt4 answer", () => {
    const actual = compareReducer(
      initialState,
      setGptFourAnswer("Hello, how can I help you?"),
    )
    expect(actual.apis.gptFourAnswer).toEqual("Hello, how can I help you?")
  })

  it("should set the user best model choice", () => {
    const actual = compareReducer(initialState, setBestModel("Gpt-4"))
    expect(actual.review.bestModel).toEqual("Gpt-4")
  })
})
