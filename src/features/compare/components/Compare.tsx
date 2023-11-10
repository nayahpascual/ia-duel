import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import type { userReview, askAPIs } from "../interfaces"
import styles from "./Compare.module.scss"
import { Card } from "./Card"
import {
  selectors,
  sendReviewAsync,
  setQuery,
  setChatGptApiKey,
  askIaAsync,
  setBestModel,
} from "../services/compareSlice"

const Compare = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(selectors.selectUserId)
  const stats = useAppSelector(selectors.selectStats)
  const globalStep = useAppSelector(selectors.selectGlobalStep)
  const apis = useAppSelector(selectors.selectApis)
  const review = useAppSelector(selectors.selectReview)
  const userReview: userReview = { userId, bestModel: review.bestModel }
  const askAPIs: askAPIs = {
    chatGptApiKey: apis.chatGptApiKey,
    query: apis.query,
  }
  const statsData = setUpStats()

  ChartJS.register(ArcElement, Tooltip, Legend)

  const firstCardHeader = (
    <a href="https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt">
      (i) How to get your API Key?
    </a>
  )
  return (
    <>
      <div className={styles.webtitle}>
        <h1>IA Duel</h1>
        <h2>Compare different IA engines</h2>
      </div>
      <Card
        testId="first-card"
        showit={true}
        title="Introduce your ChatGpt API Key"
        header={firstCardHeader}
      >
        <input
          data-testid="api-key-input"
          className={styles.inputbox}
          aria-label="Set ChatGPT API key"
          value={apis.chatGptApiKey}
          required
          onChange={(e) => dispatch(setChatGptApiKey(e.target.value))}
        />
      </Card>
      <Card
        testId="second-card"
        showit={true}
        title="Make a question"
        header="Introduce a question about anything"
      >
        <div className={styles.row}>
          <textarea
            data-testid="query-text-area"
            className={styles.textbox}
            value={apis.query}
            onChange={(e) => dispatch(setQuery(e.target.value))}
          ></textarea>
        </div>
        <div className={styles.row}>
          <button
            data-testid="ask-ia-button"
            disabled={apis.chatGptApiKey === ""}
            className={styles.button}
            onClick={() => dispatch(askIaAsync(askAPIs))}
          >
            Ask IAs
          </button>
          <span hidden={apis.askApisStatus === "idle"}>loading ...</span>
        </div>
      </Card>
      <Card
        testId="third-card"
        showit={globalStep > 0}
        title="Compare the results"
      >
        <div className={styles.columnrow}>
          <h3>
            Chat GPT 3.5:
            <span data-testid="gpt3-answer-time" className={styles.minitext}>
              {apis.gptThreeAnswerTime
                ? ` (time: ${apis.gptThreeAnswerTime}ms)`
                : ""}
            </span>
          </h3>
          <span data-testid="gpt3-answer-text" className={styles.plaintext}>
            {apis.gptThreeAnswer}
          </span>
        </div>
        <div className={styles.columnrow}>
          <h3>
            Chat GPT 4:
            <span data-testid="gpt4-answer-time" className={styles.minitext}>
              {apis.gptFourAnswerTime
                ? ` (time: ${apis.gptFourAnswerTime}ms)`
                : ""}
            </span>
          </h3>
          <span data-testid="gpt4-answer-text" className={styles.plaintext}>
            {apis.gptFourAnswer}
          </span>
        </div>
      </Card>
      <Card
        testId="fourth-card"
        showit={globalStep > 0}
        title="Which one is better?"
      >
        <div className={styles.row}>
          <label>
            <input
              data-testid="choose-gpt3"
              type="radio"
              disabled={globalStep > 1}
              className={styles.radioButton}
              value="gpt-3.5-turbo"
              checked={review.bestModel === "gpt-3.5-turbo"}
              onChange={(e) => dispatch(setBestModel(e.target.value))}
            />
            gpt-3.5
          </label>
          <label>
            <input
              data-testid="choose-gpt4"
              type="radio"
              disabled={globalStep > 1}
              className={styles.radioButton}
              value="gpt-4"
              checked={review.bestModel === "gpt-4"}
              onChange={(e) => dispatch(setBestModel(e.target.value))}
            />
            gpt-4
          </label>
        </div>
        <div className={styles.row}>
          <button
            data-testid="send-reviw-button"
            disabled={review.bestModel === "none" || globalStep > 1}
            className={styles.button}
            onClick={() => dispatch(sendReviewAsync(userReview))}
          >
            Send Review
          </button>
        </div>
      </Card>
      <Card testId="fifth-card" showit={globalStep > 1} title="Stats">
        Historic of the reviews
        <Pie data={statsData} />
      </Card>
    </>
  )

  function setUpStats() {
    const statsData = stats.map((stat) => stat.value)
    const statsLabels = stats.map((stat) => stat.name)
    const data = {
      labels: statsLabels,
      datasets: [
        {
          label: "# of Votes",
          data: statsData,
          backgroundColor: [
            "rgba(253, 181, 104, 0.7)",
            "rgba(54, 162, 235, 0.7)",
          ],
          borderWidth: 1,
        },
      ],
    }
    return data
  }
}

export default Compare
