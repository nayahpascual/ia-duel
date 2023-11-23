import { useAppSelector } from "../../../app/hooks"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import { useTranslation } from "react-i18next"
import { Card } from "./Card"
import { selectors } from "../services/compareSlice"
import { useStats } from "../hooks/useStats"

const Stats = () => {
  const { t } = useTranslation()
  const globalStep = useAppSelector(selectors.selectGlobalStep)

  const { statsData } = useStats()
  ChartJS.register(ArcElement, Tooltip, Legend)

  return (
    <>
      <Card testId="fifth-card" showIt={globalStep > 1} title={t("stats")}>
        {t("historic-reviews")}
        <Pie data={statsData} />
      </Card>
    </>
  )
}

export default Stats
