import React from 'react'

import { getContent } from 'utils'

export const Content: React.FC<{ path?: string }> = ({ path }) => {
  const LoadedContent = getContent(
    path ? `${path}.mdx` : 'index.mdx',
    () => () => `Can't find content for ${path}`
  )

  return (
    <React.Suspense fallback={''}>
      <LoadedContent />
    </React.Suspense>
  )
}
