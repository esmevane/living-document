import { lazy } from "react";

export const getPage = (
  page: string,
  fallback: (error: any) => () => React.ReactElement | string | null
) =>
  lazy(() =>
    import("!babel-loader!@mdx-js/loader!pages/" + page).catch(error => ({
      default: fallback(error)
    }))
  );
