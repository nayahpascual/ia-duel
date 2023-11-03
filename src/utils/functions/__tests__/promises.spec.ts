import { cleanup } from "@testing-library/react"
import createFetchMock from "vitest-fetch-mock"

import promiseAllElapsedTime, { promiseAllTimesResponse } from "../promises"
import { responseA, responseB } from "./moks"

// mock fetch setup
const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()

describe("PromiseAllElapsedTime function tests", () => {
  beforeEach(() => {
    fetchMocker.resetMocks()
  })
  afterEach(() => {
    cleanup()
  })
  test("Check an empty array", async () => {
    const promises: Promise<Response>[] = []
    const startTime = Date.now()
    const apisCallResults: promiseAllTimesResponse[] =
      await promiseAllElapsedTime(promises, startTime)
    expect(apisCallResults).toEqual([])
  })
  test("Check an array with one promise", async () => {
    fetchMocker.mockResponseOnce(JSON.stringify(responseA))
    const promises: Promise<Response>[] = [fetch("https://google.com")]
    const startTime = Date.now()
    const apisCallResults: promiseAllTimesResponse[] =
      await promiseAllElapsedTime(promises, startTime)
    expect(apisCallResults.length).toEqual(1)
    expect(apisCallResults[0].elapseTimeMs).toBeLessThan(10)
  })

  test("Check an array with two promises", async () => {
    fetchMocker.mockResponseOnce(JSON.stringify(responseA))
    fetchMocker.mockResponseOnce(JSON.stringify(responseB))
    const promises: Promise<Response>[] = [
      fetch("https://google.com"),
      fetch("https://google.com"),
    ]
    const startTime = Date.now()
    const apisCallResults: promiseAllTimesResponse[] =
      await promiseAllElapsedTime(promises, startTime)
    expect(apisCallResults.length).toEqual(2)
    expect(apisCallResults[0].elapseTimeMs).toBeLessThan(10)
  })
})
