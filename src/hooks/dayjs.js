import dayjs from "dayjs";
import { useMemo } from "react";
// import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const useTimeFormat = () => {
  // Extend dayjs with relativeTime plugin only once
  useMemo(() => {
    dayjs.extend(relativeTime);
  }, []);

  const formatTime = (inputTime) => {
    return dayjs(inputTime).fromNow();
  };

  return formatTime;
};
