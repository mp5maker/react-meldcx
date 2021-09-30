import * as React from 'react'
import MaterialTextField from '@mui/material/TextField'

type TTextFieldProps = Partial<
  React.ComponentProps<typeof MaterialTextField>
> & {}

const TextField: React.FC<TTextFieldProps> = ({ ...otherProps }) => {
  const props = {
    ...otherProps
  }

  return <MaterialTextField {...props} />
}

export default TextField
