import React from 'react'
import { Route } from 'react-router'

import { Content } from './Content'
import { Layout } from './Layout'
import { Page } from './Page'
import { Main } from './Main'
import { Sidebar } from './Sidebar'
import { Shell } from './Shell'

export const App: React.FC = () => (
  <Shell>
    <Layout>
      <Sidebar>
        <Content path="sidebar" />
      </Sidebar>
      <Main>
        <Route path="/:path*" component={Page} />
      </Main>
    </Layout>
  </Shell>
)
