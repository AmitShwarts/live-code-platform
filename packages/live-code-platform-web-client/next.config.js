/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_EXTERNAL_SERVER_HOST: process.env.NEXT_PUBLIC_EXTERNAL_SERVER_HOST ?? 'localhost:8080',
  },
}

module.exports = nextConfig
