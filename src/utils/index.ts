import { lazyLoad } from './lazy-load'

export const getContent = lazyLoad(content =>
  import(`!babel-loader!@mdx-js/loader!content/${content}`)
)

export const getPage = lazyLoad(page =>
  import(`!babel-loader!@mdx-js/loader!pages/${page}`)
)
