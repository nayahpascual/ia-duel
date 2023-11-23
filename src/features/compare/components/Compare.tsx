import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { useTranslation } from "react-i18next"
import styles from "./styles/Compare.module.scss"
import ApiKey from "./ApiKey"
import UserQuery from "./UserQuery"
import AnswerComparison from "./AnswerComparison"
import UserReview from "./UserReview"
import Stats from "./Stats"

const Compare = () => {
  const { t } = useTranslation()
  ChartJS.register(ArcElement, Tooltip, Legend)

  return (
    <>
      <div className={styles.webtitle}>
        <h1>{t("title")}</h1>
        <h2>{t("description")}</h2>
      </div>
      <ApiKey />
      <UserQuery />
      <AnswerComparison />
      <UserReview />
      <Stats />
    </>
  )
}

export default Compare
