import '../styles/globals.css'
import Layout from '../components/Layout'
import theme from '../app/utils/themes'
import React from 'react'
import { ThemeProvider } from '@material-ui/styles'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
