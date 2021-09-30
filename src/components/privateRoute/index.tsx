import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import routes from '../../constants/routes'
import useAuthentication from '../../hooks/useAuthentication'

type TPrivateRouteProps = Partial<React.ComponentProps<typeof Route>> & {}

const PrivateRoute: React.FC<TPrivateRouteProps> = ({
  children,
  ...rest
}: any) => {
  const { isLoggedIn } = useAuthentication()

  return (
    <Route
      render={() =>
        isLoggedIn ? children : <Redirect to={routes.login.path} />
      }
      {...rest}
    />
  )
}

export default PrivateRoute
