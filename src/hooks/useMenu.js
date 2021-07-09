import { useState, useCallback } from "react"

const useMenu = (initialState) => {
  const [value, setValue] = useState(initialState)

  const openMenu = useCallback((e) => {
    setValue(e.target)
  }, [])

  const closeMenu = useCallback(() => {
    setValue()
  }, [])

  return [
    value,
    openMenu,
    closeMenu,
  ]

}

export default useMenu
