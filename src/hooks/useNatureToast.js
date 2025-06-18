// hooks/useNatureToast.js
import { useCallback } from "react";
import toast from "react-hot-toast";
import {
  LoadingToastContent,
  SuccessToastContent,
  ErrorToastContent,
} from "../components/toast/ToastContent";
import { toastStyles } from "../components/toast/ToastStyles";

const useNatureToast = () => {
  const showLoading = useCallback((message) => {
    return toast.loading(<LoadingToastContent message={message} />, {
      duration: Infinity,
      style: toastStyles.loading,
    });
  }, []);

  const showSuccess = useCallback((message) => {
    return toast.success(<SuccessToastContent message={message} />, {
      duration: 3000,
      style: toastStyles.success,
    });
  }, []);

  const showError = useCallback((message) => {
    return toast.error(<ErrorToastContent message={message} />, {
      duration: 4000,
      style: toastStyles.error,
    });
  }, []);

  const dismiss = useCallback((toastId) => {
    toast.dismiss(toastId);
  }, []);

  return {
    showLoading,
    showSuccess,
    showError,
    dismiss,
  };
};
export default useNatureToast;
