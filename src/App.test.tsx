import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: () => {}
    },
    t: () => {}
  })
}))

jest.mock('@mui/styles', () => ({
  makeStyles: () => () => ({
    topContent: {},
    container: {},
    alert: {}
  })
}))

jest.mock('./hooks/useAlert', () => ({
  __esModule: true,
  default: () => ({
    severity: 'success',
    isVisible: false,
    text: '',
    setAlert: () => {}
  })
}))

test('check App Component', () => {
  render(<App />)
  expect(true).toBe(true)
})
