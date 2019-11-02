import { lazy } from "react";

export const getContent = (
  page: string,
  fallback: (error: any) => () => React.ReactElement | string | null
) =>
  lazy(() =>
    import("!babel-loader!@mdx-js/loader!content/" + page).catch(error => ({
      default: fallback(error)
    }))
  );
