import { screen, render } from '@testing-library/react'
import TextField from '.'
import '@testing-library/jest-dom'

describe('check TextField component', () => {
  it('should render text field properly', () => {
    render(
      <TextField
        required
        fullWidth
        label="Email"
        name="email"
        value="sample"
        placeholder="Email"
      />
    )
    const inputFieldLabel = screen.getByText('Email')
    const inputField = screen.getByPlaceholderText('Email')
    expect(inputField.name).toBe('email')
    expect(inputFieldLabel).toBeInTheDocument()
    expect(inputField).toBeInTheDocument()
  })
})
