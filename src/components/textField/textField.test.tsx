import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TextField from '.'

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
    // @ts-ignore
    expect(inputField.name).toBe('email')
    expect(inputField).toHaveValue('sample')
    expect(inputFieldLabel).toBeInTheDocument()
    expect(inputField).toBeInTheDocument()
  })
})
