import React from 'react'

import { getPage } from 'utils'
import { RouteComponentProps } from 'react-router'
import { FadesIn } from './FadesIn'
import { ErrorPage } from './ErrorPage'
import { Loading } from './Loading'

export const Page: React.FC<RouteComponentProps<{ path?: string }>> = ({
  match
}) => {
  const NoPage = () => (
    <FadesIn>
      <ErrorPage>
        <h1>There was a problem</h1>
        <h2>We couldn't find a page for the path: "/{path}"</h2>
      </ErrorPage>
    </FadesIn>
  )

  const { path } = match.params
  const LoadedContent = getPage(
    path ? `${path}.mdx` : 'index.mdx',
    () => NoPage
  )

  const fallback = (
    <FadesIn>
      <Loading>
        <h1>Loading</h1>
      </Loading>
    </FadesIn>
  )

  return (
    <React.Suspense fallback={fallback}>
      <FadesIn>
        <LoadedContent />
      </FadesIn>
    </React.Suspense>
  )
}
