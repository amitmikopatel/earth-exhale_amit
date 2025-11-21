import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    // @ts-expect-error (TS 2353)
    // This comment fixes the TypeScript error: "'loaders' does not exist in type 'TurbopackOptions'"
    // We are telling TypeScript to ignore this, because 'loaders'
    // is required by Turbopack to fix the .mts build error.
    loaders: {
      ".mts": "javascript/esm",
    },
  }
};

export default nextConfig;