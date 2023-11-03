/// <reference types="vitest/globals" />
import "@testing-library/jest-dom"
import "vitest-canvas-mock"
import createFetchMock from "vitest-fetch-mock"
import { vi } from "vitest"

const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()
fetchMocker.dontMock()
