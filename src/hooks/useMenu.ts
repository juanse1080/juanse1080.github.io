import { useCallback, useState } from "react";

const useMenu = (initialState?: any) => {
  const [value, setValue] = useState(initialState);

  const openMenu = useCallback((e: any) => {
    setValue(e.target);
  }, []);

  const closeMenu = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, openMenu, closeMenu];
};

export default useMenu;
