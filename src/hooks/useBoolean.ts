import { useCallback, useState } from "react";

const useBoolean = (
  initialState = false
): [boolean, () => void, () => void, (value: boolean) => void, () => void] => {
  const [value, setValue] = useState<boolean>(initialState);

  const toFalse = useCallback(() => {
    setValue(false);
  }, []);

  const toTrue = useCallback(() => {
    setValue(true);
  }, []);

  const toggleValue = useCallback(() => {
    setValue((beforeValue) => !beforeValue);
  }, []);

  const handleValue = useCallback((value: boolean) => {
    setValue(value);
  }, []);

  return [value, toTrue, toFalse, handleValue, toggleValue];
};

export default useBoolean;
