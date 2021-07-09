import { useState, useCallback } from "react"

const useBoolean = (initialState = false) => {
  const [value, setValue] = useState(initialState)

  const toFalse = useCallback(() => {
    setValue(false)
  }, [])

  const toTrue = useCallback(() => {
    setValue(true)
  }, [])

  const toggleValue = useCallback(() => {
    setValue(beforeValue => !beforeValue)
  }, [])

  const handleValue = useCallback((value) => {
    setValue(value)
  }, [])

  return [
    value,
    toTrue,
    toFalse,
    handleValue,
    toggleValue,
  ]

}

export default useBoolean
