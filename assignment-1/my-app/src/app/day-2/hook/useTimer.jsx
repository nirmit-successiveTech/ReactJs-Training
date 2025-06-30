import { useEffect, useState } from "react";

export default function useCountdown(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  const [isActive, setIsActive] = useState(false);

  // Start the timer
  const start = (duration) => {
    setCount(duration);
    setIsActive(true);
  };

  // Pause the timer
  const pause = () => {
    setIsActive(false);
  };

  // Reset the timer
  const reset = () => {
    setIsActive(false);
    setCount(initialCount);
  };

  useEffect(() => {
    let intervalId;

    if (isActive && count > 0) {
      intervalId = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, count]);

  return { count, isActive, start, pause, reset };
}
