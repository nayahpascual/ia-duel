import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { useTranslation } from "react-i18next"
import type { askAPIs } from "../interfaces"
import styles from "./styles/Compare.module.scss"
import { Card } from "./Card"
import { selectors, setQuery, askIaAsync } from "../services/compareSlice"

const UserQuery = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const apis = useAppSelector(selectors.selectApis)
  const askAPIs: askAPIs = {
    chatGptApiKey: apis.chatGptApiKey,
    query: apis.query,
  }

  return (
    <>
      <Card
        testId="second-card"
        showIt={true}
        title={t("make-question")}
        header={t("introduce-question")}
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
            {t("ask-ias")}
          </button>
          <span hidden={apis.askApisStatus === "idle"}>{t("loading")}</span>
        </div>
      </Card>
    </>
  )
}

export default UserQuery
