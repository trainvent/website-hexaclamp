const rawBasePath = process.env.PAGES_BASE_PATH ?? "";

export const pagesBasePath =
  rawBasePath && rawBasePath !== "/"
    ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
    : "";

export const withPagesBasePath = (path: string) =>
  `${pagesBasePath}${path.startsWith("/") ? path : `/${path}`}`;
