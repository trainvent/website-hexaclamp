const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const normalizedBasePath =
  rawBasePath && rawBasePath !== "/"
    ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
    : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: normalizedBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
