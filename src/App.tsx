import Compare from "./features/compare/components/Compare"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./assets/styles/App.css"

function App() {
  return (
    <div className="App">
      <Compare />
      <ToastContainer />
    </div>
  )
}

export default App
