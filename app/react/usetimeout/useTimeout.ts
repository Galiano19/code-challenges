import { useEffect, useRef } from "react";

export function useTimeout({
  callback,
  delay,
}: {
  callback: () => void;
  delay: number;
}) {
  const callbackRef = useRef<any>(null);
  callbackRef.current = callback;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callbackRef.current();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);
}
