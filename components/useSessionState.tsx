import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

function useSessionState<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const value =
      typeof sessionStorage !== "undefined"
        ? sessionStorage.getItem(key)
        : undefined;
    return value ? JSON.parse(value) : defaultValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useSessionState;
