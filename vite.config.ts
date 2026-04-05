import vinext from "vinext";
import { defineConfig } from "vite";

const rawBasePath = process.env.PAGES_BASE_PATH ?? "";
const normalizedBasePath =
  rawBasePath && rawBasePath !== "/"
    ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}/`
    : "/";

export default defineConfig({
  base: normalizedBasePath,
  define: {
    "process.env.PAGES_BASE_PATH": JSON.stringify(rawBasePath),
  },
  plugins: [vinext()],
});
