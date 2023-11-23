import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { useTranslation } from "react-i18next"
import styles from "./styles/Compare.module.scss"
import { Card } from "./Card"
import { selectors, setChatGptApiKey } from "../services/compareSlice"

const ApiKey = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const apis = useAppSelector(selectors.selectApis)

  const firstCardHeader = (
    <a href="https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt">
      (i) {t("hot-to-get-api")}
    </a>
  )
  return (
    <>
      <Card
        testId="first-card"
        showIt={true}
        title={t("introduce-key")}
        header={firstCardHeader}
      >
        <input
          data-testid="api-key-input"
          className={styles.inputbox}
          aria-label={t("introduce-key")}
          value={apis.chatGptApiKey}
          required
          onChange={(e) => dispatch(setChatGptApiKey(e.target.value))}
        />
      </Card>
    </>
  )
}

export default ApiKey
