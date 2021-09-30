import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import useCommonStyles from '../../hooks/useCommonStyles'
import useDevices from '../../hooks/useDevices'

interface IDevicesProps {}

const useStyles: any = makeStyles((_theme: any) => ({
  container: {
    height: '100%'
  },
  center: {
    width: 300,
    height: 300
  }
}))

const Devices: React.FC<IDevicesProps> = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const commonClasses = useCommonStyles()
  const { devices }: any = useDevices()

  return (
    <Box className={`${classes.container} ${commonClasses.center}`}>
      <Box className={commonClasses.center}>
        <Box>
          <Box>
            <Typography variant="h4">
              {devices.length} {t('DEVICES')}
            </Typography>
          </Box>
          <Box className={commonClasses.center}>
            <Typography variant="caption">{t('ONLINE')}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Devices
