import {
  differenceInMilliseconds,
  startOfSecond,
  addSeconds,
  getHours,
  getSeconds,
  getMinutes,
  format
} from "date-fns";
import { useEffect, useState, useRef } from "react";

function msUntilNext() {
  const start = startOfSecond;
  const add = addSeconds;
  const date = new Date();
  return differenceInMilliseconds(add(start(date), 1), date);
}

function useCurrentTime() {
  const [date, setDate] = useState(startOfSecond(new Date()));
  const timer = useRef(0);

  useEffect(() => {
    function delayedTimeChange() {
      timer.current = setTimeout(() => {
        delayedTimeChange();
      }, msUntilNext("second"));

      setDate(new Date(startOfSecond(new Date())));
    }

    delayedTimeChange();
    return () => clearTimeout(timer.current);
  }, []);

  return {
    date,
    hours: getHours(date),
    mintues: getMinutes(date),
    seconds: getSeconds(date),
    time: format(date, "hh:mm aa"),
    military: format(date, "H:mm")
  };
}

export { useCurrentTime };
