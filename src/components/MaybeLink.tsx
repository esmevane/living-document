import React from 'react'
import { Link } from 'react-router-dom'

export const MaybeLink: React.FC = ({ children, href, ...props }: any) => {
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
