import { toast, ToastOptions } from "react-toastify";

const commonSettings: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const ToastHandle = (
  type: "success" | "warning" | "error",
  message: string
) => {
  if (type === "success") {
    toast.success(message, commonSettings);
  } else if (type === "warning") {
    toast.warning(message, commonSettings);
  } else {
    toast.error(message, commonSettings);
  }
};

export default ToastHandle;
