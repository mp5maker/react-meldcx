import { render, screen } from '@testing-library/react'
import Body from '.'
import Button from '../button'
import '@testing-library/jest-dom'

describe('check Body Component', () => {
  it('should render (text) children properly', () => {
    render(<Body>random text</Body>)
    const text = screen.getByText('random text')
    expect(text).toBe(text)
  })
  it('should render (component) children properly', () => {
    render(
      <Body>
        <Button>Submit</Button>
      </Body>
    )
    const button = screen.getByText('Submit')
    expect(button).not.toBeDisabled()
    expect(button).toBeInTheDocument()
  })
  it('should render array of (component) children properly', () => {
    render(
      <Body>
        <Button>Submit</Button>
        <Button>Submit</Button>
        <Button>Submit</Button>
      </Body>
    )
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })
})
