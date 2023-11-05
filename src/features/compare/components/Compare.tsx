import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import type { userReview, askAPIs } from "../interfaces"
import styles from "./Compare.module.scss"
import StyledCard, {
  StyledCardTitle,
  StyledCardBody,
  StyledCardHeader,
} from "./StyledCard"

import {
  selectGlobalStep,
  selectUserId,
  sendReviewAsync,
  selectQuery,
  setQuery,
  selectChatGptApiKey,
  setChatGptApiKey,
  askIaAsync,
  selectGptThreeAnswer,
  selectGptFourAnswer,
  selectBestModel,
  setBestModel,
  selectApisAskStatus,
  selectGptThreeAnswerTime,
  selectGptFourAnswerTime,
  selectStats,
} from "../services/compareSlice"

const Compare = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(selectUserId)
  const query = useAppSelector(selectQuery)
  const chatGptApiKey = useAppSelector(selectChatGptApiKey)
  const gptThreeAnswer = useAppSelector(selectGptThreeAnswer)
  const gptFourAnswer = useAppSelector(selectGptFourAnswer)
  const review = useAppSelector(selectBestModel)
  const genericAskStatus = useAppSelector(selectApisAskStatus)
  const gptThreeAnswerTime = useAppSelector(selectGptThreeAnswerTime)
  const gptFourAnswerTime = useAppSelector(selectGptFourAnswerTime)
  const stats = useAppSelector(selectStats)
  const globalStep = useAppSelector(selectGlobalStep)

  const userReview: userReview = { userId: userId, bestModel: review }

  const askAPIs: askAPIs = {
    chatGptApiKey: chatGptApiKey,
    query: query,
  }

  const statsData = setUpStats()

  ChartJS.register(ArcElement, Tooltip, Legend)

  return (
    <>
      <div className={styles.webtitle}>
        <h1>IA Duel</h1>
        <h2>Compare different IA engines</h2>
      </div>
      <StyledCard data-testid="first-card" $showit={true}>
        <StyledCardTitle>Introduce your ChatGpt API Key</StyledCardTitle>
        <StyledCardHeader>
          <a href="https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt">
            (i) How to get your API Key?
          </a>
        </StyledCardHeader>
        <StyledCardBody>
          <input
            data-testid="api-key-input"
            className={styles.inputbox}
            aria-label="Set ChatGPT API key"
            value={chatGptApiKey}
            required
            onChange={(e) => dispatch(setChatGptApiKey(e.target.value))}
          />
        </StyledCardBody>
      </StyledCard>
      <StyledCard data-testid="second-card" $showit={true}>
        <StyledCardTitle>Make a question</StyledCardTitle>
        <StyledCardHeader>Introduce a question about anything</StyledCardHeader>
        <StyledCardBody>
          <div className={styles.row}>
            <textarea
              data-testid="query-text-area"
              className={styles.textbox}
              value={query}
              onChange={(e) => dispatch(setQuery(e.target.value))}
            ></textarea>
          </div>
          <div className={styles.row}>
            <button
              data-testid="ask-ia-button"
              disabled={chatGptApiKey === ""}
              className={styles.button}
              onClick={() => dispatch(askIaAsync(askAPIs))}
            >
              Ask IAs
            </button>
            <span hidden={genericAskStatus === "idle"}>loading ...</span>
          </div>
        </StyledCardBody>
      </StyledCard>
      <StyledCard data-testid="third-card" $showit={globalStep > 0}>
        <StyledCardTitle>Compare the results</StyledCardTitle>
        <div className={styles.columnrow}>
          <h3>
            Chat GPT 3.5:
            <span data-testid="gpt3-answer-time" className={styles.minitext}>
              {gptThreeAnswerTime ? ` (time: ${gptThreeAnswerTime}ms)` : ""}
            </span>
          </h3>
          <span data-testid="gpt3-answer-text" className={styles.plaintext}>
            {gptThreeAnswer}
          </span>
        </div>
        <div className={styles.columnrow}>
          <h3>
            Chat GPT 4:
            <span data-testid="gpt4-answer-time" className={styles.minitext}>
              {gptFourAnswerTime ? ` (time: ${gptFourAnswerTime}ms)` : ""}
            </span>
          </h3>
          <span data-testid="gpt4-answer-text" className={styles.plaintext}>
            {gptFourAnswer}
          </span>
        </div>
      </StyledCard>
      <StyledCard data-testid="fourth-card" $showit={globalStep > 0}>
        <StyledCardTitle>Which one is better?</StyledCardTitle>
        <div className={styles.row}>
          <label>
            <input
              data-testid="choose-gpt3"
              type="radio"
              disabled={globalStep > 1}
              className={styles.radioButton}
              value="gpt-3.5-turbo"
              checked={review === "gpt-3.5-turbo"}
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
              checked={review === "gpt-4"}
              onChange={(e) => dispatch(setBestModel(e.target.value))}
            />
            gpt-4
          </label>
        </div>
        <div className={styles.row}>
          <button
            data-testid="send-reviw-button"
            disabled={review === "none" || globalStep > 1}
            className={styles.button}
            onClick={() => dispatch(sendReviewAsync(userReview))}
          >
            Send Review
          </button>
        </div>
      </StyledCard>
      <StyledCard data-testid="fifth-card" $showit={globalStep > 1}>
        <StyledCardTitle>Stats</StyledCardTitle>
        Historic of the reviews
        <Pie data={statsData} />
      </StyledCard>
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
