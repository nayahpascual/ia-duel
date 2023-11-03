import processReviews, { stat, reviews } from "../stats"

describe("Test processReviews", () => {
  test("Check an empty array", () => {
    const reviews: reviews[] = []
    const stats: stat[] = []
    expect(processReviews(reviews)).toEqual(stats)
  })
  test("Check a good array", () => {
    const reviews: reviews[] = [
      {
        _id: "1",
        userId: "1",
        bestModel: "gpt-3.5-turbo",
      },
      {
        _id: "2",
        userId: "2",
        bestModel: "gpt-3.5-turbo",
      },
      {
        _id: "3",
        userId: "3",
        bestModel: "gpt-4",
      },
    ]
    const stats: stat[] = [
      {
        name: "gpt-3.5-turbo",
        value: 2,
      },
      {
        name: "gpt-4",
        value: 1,
      },
    ]
    expect(processReviews(reviews)).toEqual(stats)
  })
})
