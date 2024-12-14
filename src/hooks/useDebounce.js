import { useEffect, useMemo, useState } from "react";

const Debounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (typeof delay !== "number" || delay < 0) {
      throw new Error("Delay must be a positive number");
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  const debounceValueMemo = useMemo(() => debouncedValue, [debouncedValue]);
  return debounceValueMemo;
};

export default Debounce;
