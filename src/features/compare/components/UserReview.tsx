import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { useTranslation } from "react-i18next"
import type { userReview } from "../interfaces"
import styles from "./styles/Compare.module.scss"
import { Card } from "./Card"
import {
  selectors,
  sendReviewAsync,
  setBestModel,
} from "../services/compareSlice"

const UserReview = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const userId = useAppSelector(selectors.selectUserId)
  const globalStep = useAppSelector(selectors.selectGlobalStep)
  const review = useAppSelector(selectors.selectReview)
  const userReview: userReview = { userId, bestModel: review.bestModel }

  return (
    <>
      <Card
        testId="fourth-card"
        showIt={globalStep > 0}
        title={t("which-is-better")}
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
            {t("gpt3")}:
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
            {t("gpt4")}:
          </label>
        </div>
        <div className={styles.row}>
          <button
            data-testid="send-reviw-button"
            disabled={review.bestModel === "none" || globalStep > 1}
            className={styles.button}
            onClick={() => dispatch(sendReviewAsync(userReview))}
          >
            {t("send-review")}
          </button>
        </div>
      </Card>
    </>
  )
}

export default UserReview
