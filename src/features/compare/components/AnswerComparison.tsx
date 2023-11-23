import { useAppSelector } from "../../../app/hooks"
import { useTranslation } from "react-i18next"
import styles from "./styles/Compare.module.scss"
import { Card } from "./Card"
import { selectors } from "../services/compareSlice"

const AnswerComparison = () => {
  const { t } = useTranslation()
  const globalStep = useAppSelector(selectors.selectGlobalStep)
  const apis = useAppSelector(selectors.selectApis)
  return (
    <>
      <Card
        testId="third-card"
        showIt={globalStep > 0}
        title={t("compare-results")}
      >
        <div className={styles.columnrow}>
          <h3>
            {t("gpt3")}:
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
            {t("gpt4")}:
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
    </>
  )
}

export default AnswerComparison
