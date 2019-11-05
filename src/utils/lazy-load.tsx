import React from 'react'
import { FadesIn } from 'components'

type Importer = (path: string) => Promise<any>
type ErrorFallback = (error: any) => () => React.ReactElement | string | null

const fadeItIn = (importedModule: any) => ({
  default: () => (
    <FadesIn>
      <importedModule.default />
    </FadesIn>
  )
})

const displayError = (fallback: ErrorFallback) => (error: any) => ({
  default: fallback(error)
})

export const lazyLoad = (importer: Importer) => (
  page: string,
  fallback: ErrorFallback
) =>
  React.lazy(
    () =>
      importer(page)
        .then(fadeItIn)
        .catch(displayError(fallback)) as any
  )
