import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import i18n from "../../../../i18n"
import { ToastContainer } from "react-toastify"
import createFetchMock from "vitest-fetch-mock"
import compareReducer from "../../services/compareSlice"
import {
  chatGpt3Response,
  chatGpt4Response,
  getReviewsResponse,
  postReviewResponse,
} from "./mocks"

import Compare from "../Compare"

// initial state and render component
const renderComponent = () => {
  const store = configureStore({
    reducer: {
      compare: compareReducer,
    },
  })
  return render(
    <Provider store={store}>
      <Compare />
      <ToastContainer />
    </Provider>,
  )
}

// Mock the pie componet to avoid errors in the test with the canvas chart
vi.mock("react-chartjs-2", () => ({
  Pie: () => null,
}))

// Mock fetchs setup
const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()

const setAskIaMocks = () => {
  fetchMocker.mockResponseOnce(JSON.stringify(chatGpt3Response))
  fetchMocker.mockResponseOnce(JSON.stringify(chatGpt4Response))
}
const setAskIaMocksFail = () => {
  fetchMocker.mockRejectOnce(new Error("Error"))
  fetchMocker.mockRejectOnce(new Error("Error"))
}
const setGetReviewMocks = () => {
  fetchMocker.mockResponse(JSON.stringify(postReviewResponse))
  fetchMocker.mockResponse(JSON.stringify(getReviewsResponse))
}
const setGetReviewMocksFail = () => {
  fetchMocker.mockRejectOnce(new Error("Error"))
  fetchMocker.mockRejectOnce(new Error("Error"))
}

//User steps
const askIaStep = () => {
  const apiKeyInput = screen.getByTestId("api-key-input")
  fireEvent.change(apiKeyInput, { target: { value: "APIKEY" } })
  expect(apiKeyInput).toHaveValue("APIKEY")
  const queryText = screen.getByTestId("query-text-area")
  fireEvent.change(queryText, { target: { value: "Say Hello" } })
  expect(queryText).toHaveValue("Say Hello")

  const askIaButton = screen.getByTestId("ask-ia-button")
  fireEvent.click(askIaButton)
}
const sendReviewStep = () => {
  const sendReviewButton = screen.getByTestId("send-reviw-button")
  const gpt3Radio = screen.getByTestId("choose-gpt3")
  fireEvent.click(gpt3Radio)
  fireEvent.click(sendReviewButton)
}

describe("Inicial state", () => {
  afterEach(() => {
    cleanup()
  })
  test("renders the first and second card", async () => {
    renderComponent()

    await waitFor(() => {
      expect(screen.getByTestId("first-card")).toHaveStyle("opacity: 1")
    })
    await waitFor(() => {
      expect(screen.getByTestId("second-card")).toHaveStyle("opacity: 1")
    })
    const firstCardTitle = screen.getByText(i18n.t("introduce-question"))
    expect(firstCardTitle).toBeInTheDocument()
    const secondCardTitle = screen.getByText(i18n.t("make-question"))
    expect(secondCardTitle).toBeInTheDocument()
  })
  test("Ask IAs button is disable by default", () => {
    renderComponent()
    const askIaButton = screen.getByTestId("ask-ia-button")
    expect(askIaButton).toBeDisabled()
  })
})

describe("Ask IA button", () => {
  beforeEach(() => {
    fetchMocker.resetMocks()
  })
  afterEach(() => {
    cleanup()
  })
  test("No call is done if the 'Ask IA' button is disabled and clicked", () => {
    renderComponent()
    const askIaButton = screen.getByTestId("ask-ia-button")
    fireEvent.click(askIaButton)
    expect(fetchMocker.mock.calls.length).toBe(0)
  })
  test("Ask IAs button is enabled after user introduce some text in the api-key-input input", () => {
    renderComponent()
    const askIaButton = screen.getByTestId("ask-ia-button")
    const apiKeyInput = screen.getByTestId("api-key-input")
    fireEvent.change(apiKeyInput, { target: { value: "APIKEY" } })
    expect(apiKeyInput).toHaveValue("APIKEY")
    expect(askIaButton).toBeEnabled()
  })
  test("Calls are done if the 'Ask IAs' button is enabled and clicked", () => {
    fetchMocker.resetMocks()
    setAskIaMocks()
    renderComponent()
    askIaStep()
    expect(fetchMocker.mock.calls.length).toBe(2)
  })
  test("Third and fourth card are shown after 'Ask IAs' is clicked and received a correct answer", async () => {
    fetchMocker.resetMocks()
    setAskIaMocks()
    renderComponent()
    askIaStep()
    await waitFor(() => {
      expect(screen.getByTestId("third-card")).toHaveStyle("opacity: 1")
    })
    await waitFor(() => {
      expect(screen.getByTestId("fourth-card")).toHaveStyle("opacity: 1")
    })
  })

  test("Results are are shown after 'Ask IA' calls", async () => {
    fetchMocker.resetMocks()
    setAskIaMocks()
    renderComponent()
    askIaStep()

    const gpt3Anser = screen.getByTestId("gpt3-answer-text")
    const gpt3AnserTime = screen.getByTestId("gpt3-answer-time")
    const gpt4Anser = screen.getByTestId("gpt4-answer-text")
    const gpt4AnserTime = screen.getByTestId("gpt4-answer-time")
    await waitFor(() => {
      expect(gpt3Anser.innerHTML).not.toBe("")
    })
    await waitFor(() => {
      expect(gpt3AnserTime.innerHTML).not.toBe("")
    })
    await waitFor(() => {
      expect(gpt4Anser.innerHTML).not.toBe("")
    })
    await waitFor(() => {
      expect(gpt4AnserTime.innerHTML).not.toBe("")
    })
  })
  test("Error message is shown after 'Ask IA' calls and received a error", async () => {
    fetchMocker.resetMocks()
    setAskIaMocksFail()
    renderComponent()
    askIaStep()
    await waitFor(() => {
      expect(screen.getByText(i18n.t("error-connect-api"))).toBeInTheDocument()
    })
  })
})

describe("Review", () => {
  beforeEach(() => {
    fetchMocker.resetMocks()
  })
  afterEach(() => {
    cleanup()
  })
  test("'Send Review' button is disabled by default", async () => {
    setAskIaMocks()
    renderComponent()
    askIaStep()
    const sendReviewButton = screen.getByTestId("send-reviw-button")
    expect(sendReviewButton).toBeDisabled()
  })
  test("'Send Review' button is disabled ask IAs call fail", async () => {
    setAskIaMocksFail()
    renderComponent()
    askIaStep()

    const sendReviewButton = screen.getByTestId("send-reviw-button")

    await waitFor(() => {
      expect(sendReviewButton).toBeDisabled()
    })
  })
  test("'Send Review' button is enabled after user select a model", async () => {
    setAskIaMocks()
    renderComponent()
    askIaStep()
    const sendReviewButton = screen.getByTestId("send-reviw-button")
    const gpt3Radio = screen.getByTestId("choose-gpt3")
    fireEvent.click(gpt3Radio)
    await waitFor(() => {
      expect(sendReviewButton).toBeEnabled()
    })
  })
  test("Review is sent after user select a model and click 'Send Review'", async () => {
    setAskIaMocks()
    setGetReviewMocks()
    renderComponent()
    askIaStep()
    sendReviewStep()
    await waitFor(() => {
      expect(fetchMocker.mock.calls.length).toBe(4)
    })
  })
  test("Stats card is shown after user send review", async () => {
    setAskIaMocks()
    setGetReviewMocks()
    renderComponent()
    askIaStep()
    sendReviewStep()
    await waitFor(() => {
      expect(screen.getByTestId("fifth-card")).toHaveStyle("opacity: 1")
    })
  })
  test("Error message is shown after 'Send review' call have an error", async () => {
    setAskIaMocks()
    setGetReviewMocksFail()
    renderComponent()
    askIaStep()
    sendReviewStep()
    await waitFor(() => {
      expect(
        screen.getByText(i18n.t("error-sending-review")),
      ).toBeInTheDocument()
    })
  })
  test("Stats card isn't shown after 'Send review' call have an error", async () => {
    setAskIaMocks()
    setGetReviewMocksFail()
    renderComponent()
    askIaStep()
    sendReviewStep()
    // wait for the error message
    vi.useFakeTimers()
    act(() => {
      vi.advanceTimersByTime(100)
    })
    vi.useRealTimers()
    await waitFor(() => {
      expect(screen.getByTestId("fifth-card")).toHaveStyle("opacity: 0")
    })
  })
})
