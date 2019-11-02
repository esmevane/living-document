import { MDXProvider } from '@mdx-js/react'
import { createMemoryHistory, createBrowserHistory } from 'history'
import React from 'react'
import { Router } from 'react-router'
import { ThemeProvider } from 'styled-components'

import { light } from 'theme'

import { MaybeLink } from './MaybeLink'

const markdownDefinitions = {
  a: (props: any) => <MaybeLink {...props} />
}

const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory({ initialEntries: ['/'] })
    : createBrowserHistory()

export const Shell: React.FC = ({ children }) => (
  <Router history={history}>
    <MDXProvider components={markdownDefinitions}>
      <ThemeProvider theme={light}>
        <>{children}</>
      </ThemeProvider>
    </MDXProvider>
  </Router>
)
