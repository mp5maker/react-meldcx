import { render, screen } from '@testing-library/react'
import Button from '.'
import '@testing-library/jest-dom'

describe('check Button Component', () => {
  it('should stay disabled', () => {
    render(<Button disabled>Submit</Button>)
    const button = screen.getByText('Submit')
    const buttonTwo = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(buttonTwo).toHaveTextContent('Submit')
    expect(button).toEqual(buttonTwo)
    expect(button).toBeInTheDocument()
  })
  it('should not stay disabled', () => {
    render(<Button>Submit</Button>)
    const button = screen.getByText('Submit')
    expect(button).not.toBeDisabled()
    expect(button).toBeInTheDocument()
  })
})
