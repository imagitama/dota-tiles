import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Global, css } from '@emotion/core'
import PageHeader from './components/header'
import PageFooter from './components/footer'
import * as routes from './routes'
import * as containers from './containers'
import backgroundImage from './assets/images/dark_wood_@2X.png'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    background: url(${backgroundImage}) repeat #000;
    overflow: hidden;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    font-family: sans-serif;
  }

  a {
    color: #fff;
  }
`

const App = () => (
  <>
    <Global styles={globalStyles} />
    <PageHeader />
    <main className="main">
      <Switch>
        <Route exact path={routes.home} component={containers.home} />
      </Switch>
    </main>
    <PageFooter />
  </>
)

export default App
