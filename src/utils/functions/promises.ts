export interface promiseAllTimesResponse {
  elapseTimeMs: number
  response: any
}

// Similar to promiseAll but returns the elapsed time for each promise
export default function promiseAllElapsedTime(
  promises: Promise<Response>[],
  startTime: number,
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    let results: promiseAllTimesResponse[] = []
    if (promises.length === 0) resolve(results)
    let count = 0
    promises.forEach(async (promise, index) => {
      try {
        let response: Response = await promise
        const endTime = Date.now()
        let responseObject = await response.json()

        results[index] = {
          elapseTimeMs: endTime - startTime,
          response: responseObject,
        }
      } catch (e) {
        reject(e)
      }
      count++
      if (count === promises.length) resolve(results)
    })
  })
}
