const repo = 'test-blog'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

/**
   * @type {import('next').NextConfig}
   */
const nextConfig   = {
  images: {
    loader: 'akamai',
    path: './',
  },
  assetPrefix: assetPrefix,
  basePath: basePath
};

export default   nextConfig;
