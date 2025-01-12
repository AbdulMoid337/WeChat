// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org'], // Add external domains for images
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    STREAM_KEY: process.env.STREAM_KEY,
  },
  serverRuntimeConfig: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    STREAM_SECRET_KEY: process.env.STREAM_SECRET_KEY,
  },
};

