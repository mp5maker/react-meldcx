import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import App from './App'
import './index.scss'
import i18n from './locales/i18n'
import AuthenticationProvider from './redux/authentication/context'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
