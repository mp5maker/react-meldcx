import * as React from 'react'

const useLocalStorage = () => {
  const setLocalStorage = React.useCallback(
    ({
      key,
      value,
      json = false
    }: {
      key: string
      value: string
      json?: boolean
    }) => {
      if (window.localStorage) {
        window.localStorage.setItem(key, json ? JSON.stringify(value) : value)
      }
    },
    []
  )

  const getLocalStorage = React.useCallback(
    ({ key, json }: { key: string; json?: boolean }) => {
      const data: any = localStorage.getItem(key)
      if (json) return JSON.parse(data)
      return data
    },
    []
  )

  return { setLocalStorage, getLocalStorage }
}

export default useLocalStorage
