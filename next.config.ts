import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // TODO 开启部分预渲染
    // 'incremental' 值允许为特定路由采用 PPR。
    // ppr: 'incremental'
    // cacheComponents: true, // 启用部分预渲染（PPR）
    images: {
      remotePatterns: [new URL('http://ghchart.rshah.org/2016rshah')],
    },
  }
};

export default nextConfig;
