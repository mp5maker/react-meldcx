import { render, screen } from '@testing-library/react'
import Devices from '.'

jest.mock('@mui/styles', () => ({
  makeStyles: () => () => ({
    container: {},
    content: {},
    bottom: {},
    button: {}
  })
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (val: string) => val
  })
}))

describe('check Devices Page', () => {
  it('should render devices page properly', async () => {
    render(<Devices />)
    const notify = screen.getByText('NOTIFY')
    const logout = screen.getByText('LOG_OUT')
    expect(notify).toHaveTextContent('NOTIFY')
    expect(logout).toHaveTextContent('LOG_OUT')
    expect(notify).toBeInTheDocument()
    expect(logout).toBeInTheDocument()
  })
})
