import { render, screen } from '@testing-library/react'
import Alert from '.'
import AlertProvider from '../../redux/alert/context'

describe('check Alert Component', () => {
  it('should work properly', () => {
    render(
      <AlertProvider>
        <Alert />
      </AlertProvider>
    )
    const alert = screen.getByTestId('alert')
    expect(alert.style.top).not.toBe(0)
    expect(alert).toBeInTheDocument()
  })
})
