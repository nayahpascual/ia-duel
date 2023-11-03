import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"

// Mock the pie componet to avoid errors in the test with the canvas chart
vi.mock("react-chartjs-2", () => ({
  Pie: () => null,
}))

test("renders the title", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  expect(screen.getByText(/IA Duel/i)).toBeInTheDocument()
})
