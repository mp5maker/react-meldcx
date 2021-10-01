import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import apiHelper from '../api/apiHelper'
import settings from '../constants/settings'

const useDevices = () => {
  const timeout: any = React.useRef()
  const [devices, setDevices] = React.useState<Array<any>>([])
  const [firstCall, setFirstCall] = React.useState<boolean>(true)

  React.useEffect(() => {
    const recursion = () => {
      if (timeout.current) clearTimeout(timeout.current)

      const callApi = () => {
        const onSuccess = (response: AxiosResponse) => {
          setDevices(get(response, 'data.devices', {}))
          setFirstCall(false)
          recursion()
        }

        const onError = (error: AxiosError) => {
          console.debug(error)
          recursion()
        }

        apiHelper.devicies.getAll().then(onSuccess).catch(onError)
      }

      timeout.current = setTimeout(() => {
        callApi()
      }, settings.POLLING_INTERVAL)
    }

    const onSuccess = (response: AxiosResponse) => {
      setDevices(get(response, 'data.devices', {}))
      setFirstCall(false)
      recursion()
    }

    const onError = (error: AxiosError) => {
      console.debug(error)
      recursion()
    }

    apiHelper.devicies.getAll().then(onSuccess).catch(onError)

    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [])

  return { devices, setDevices }
}

export default useDevices
