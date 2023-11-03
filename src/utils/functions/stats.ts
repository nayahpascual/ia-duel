export interface stat {
  name: string
  value: number
}
export interface reviews {
  _id: string
  userId: string
  bestModel: string
}

// Process user reviews and return stats
const processReviews = (reviews: reviews[]): stat[] => {
  const stats: stat[] = []
  if (reviews && reviews.length > 0) {
    reviews.forEach((review) => {
      if (!review.bestModel) return
      const index = stats.findIndex((stat) => stat.name === review.bestModel)
      if (index === -1) {
        stats.push({ name: review.bestModel, value: 1 })
      } else {
        stats[index].value++
      }
    })
  }
  return stats
}

export default processReviews
