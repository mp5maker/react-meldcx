import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import apiHelper from '../api/apiHelper'
import settings from '../constants/settings'

const useDevices = () => {
  const timeout: any = React.useRef()
  const [devices, setDevices] = React.useState<Array<any>>([])
  const isMounted: any = React.useRef()

  React.useEffect(() => {
    const recursion = () => {
      if (timeout.current) clearTimeout(timeout.current)

      const callApi = () => {
        const onSuccess = (response: AxiosResponse) => {
          if (isMounted) setDevices(get(response, 'data.devices', {}))
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
      if (isMounted) setDevices(get(response, 'data.devices', {}))
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

  React.useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  return { devices, setDevices }
}

export default useDevices
