import { MDXProvider } from '@mdx-js/react'
import { createMemoryHistory, createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router } from 'react-router'
import { ThemeProvider } from 'styled-components'

import { light } from 'theme'

import { Layout } from './Layout'
import { Page } from './Page'
import { Primary } from './Primary'
import { Sidebar } from './Sidebar'
import { Content } from './Content'
import { Link } from 'react-router-dom'

const MaybeLink: React.FC = ({ children, href, ...props }: any) => {
  const isExternal = String(href).includes('://')
  return isExternal ? (
    <a href={href} {...props} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <Link to={href} {...props}>
      {children}
    </Link>
  )
}

const markdownDefinitions = {
  a: (props: any) => <MaybeLink {...props} />
}

const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory({ initialEntries: ['/'] })
    : createBrowserHistory()

export const App: React.FC = () => (
  <Router history={history}>
    <MDXProvider components={markdownDefinitions}>
      <ThemeProvider theme={light}>
        <Layout>
          <Sidebar>
            <Content path="sidebar" />
          </Sidebar>
          <Primary>
            <Route path="/:path*" component={Page} />
          </Primary>
        </Layout>
      </ThemeProvider>
    </MDXProvider>
  </Router>
)
