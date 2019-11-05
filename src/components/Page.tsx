import React from 'react'

import { getPage } from 'utils'
import { RouteComponentProps } from 'react-router'

export const Page: React.FC<RouteComponentProps<{ path?: string }>> = ({
  match
}) => {
  const { path } = match.params
  const LoadedContent = getPage(path ? `${path}.mdx` : 'index.mdx', () => () =>
    `Can't find page for ${path}`
  )

  return (
    <React.Suspense fallback={''}>
      <LoadedContent />
    </React.Suspense>
  )
}
