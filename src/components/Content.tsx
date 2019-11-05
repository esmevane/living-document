import React from 'react'

import { getContent } from 'utils'

import { FadesIn } from './FadesIn'
import { Loading } from './Loading'

export const Content: React.FC<{ path?: string }> = ({ path }) => {
  const NoContent = () => <FadesIn>Missing content: {path}</FadesIn>

  const LoadedContent = getContent(
    path ? `${path}.mdx` : 'index.mdx',
    () => NoContent
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
      <LoadedContent />
    </React.Suspense>
  )
}
