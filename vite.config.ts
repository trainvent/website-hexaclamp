import vinext from "vinext";
import { defineConfig } from "vite";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const normalizedBasePath =
  rawBasePath && rawBasePath !== "/"
    ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}/`
    : "/";

export default defineConfig({
  base: normalizedBasePath,
  plugins: [vinext()],
});
