import { toast, ToastOptions } from "react-toastify"

const options: ToastOptions<{}> = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
}

export const showError = (errorMessage: string): void => {
  toast.error(errorMessage, options)
}
export const showMessage = (message: string): void => {
  toast.info(message, options)
}
