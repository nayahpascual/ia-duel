import { useMemo } from "react"
import { useAppSelector } from "../../../app/hooks"
import { selectors } from "../services/compareSlice"
export const useStats = () => {
  const stats = useAppSelector(selectors.selectStats)
  const statsData = useMemo(() => {
    const statsData = stats.map((stat) => stat.value)
    const statsLabels = stats.map((stat) => stat.name)
    const data = {
      labels: statsLabels,
      datasets: [
        {
          label: "nr-votes",
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
  }, [stats])
  return {
    statsData,
    stats,
  }
}
