import { render, screen } from '@testing-library/react'
import Circle from '.'
import '@testing-library/jest-dom'

jest.mock('@mui/styles', () => ({
  makeStyles: () => () => ({
    container: {}
  })
}))

describe('check Circle Component', () => {
  it('should draw a circle', () => {
    render(<Circle item={{}} radius={50} />)
    const circle = screen.getByTestId('circle')
    expect(circle).toBeInTheDocument()
  })
})
