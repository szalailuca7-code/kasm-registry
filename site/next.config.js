/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Sajat Kasm Registry' ,
    description: 'Sajat Kasm Workspaces 1.17 alkalmazasok',
    icon: '/img/logo.svg',
    listUrl: 'https://szalailuca7-code.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
