import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from './styles/theme'

/* import { Routes } from './routes' */

import { SignIn } from './pages/SingIn'
import { SignOut } from './pages/SingOut'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Routes /> */}
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
