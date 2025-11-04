import { toast } from "react-toastify";

const useToaster = () => {
  const successToast = (msg: string) => {
    return toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const errorToast = (msg: string) => {
    return toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return { successToast, errorToast };
};

export default useToaster;
