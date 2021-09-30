import MaterialButton from '@mui/material/Button'
import * as React from 'react'

type IButtonPropsInterface = Partial<
  React.ComponentProps<typeof MaterialButton>
> & {}

const Button: React.FC<IButtonPropsInterface> = ({ ...otherProps }: any) => {
  const props = {
    ...otherProps
  }

  return <MaterialButton {...props} />
}

export default Button
