import React from 'react'
import { Route } from 'react-router'

import { Content } from './Content'
import { Layout } from './Layout'
import { Page } from './Page'
import { Primary } from './Primary'
import { Sidebar } from './Sidebar'
import { Shell } from './Shell'

export const App: React.FC = () => (
  <Shell>
    <Layout>
      <Sidebar>
        <Content path="sidebar" />
      </Sidebar>
      <Primary>
        <Route path="/:path*" component={Page} />
      </Primary>
    </Layout>
  </Shell>
)
