import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static output works on ordinary web hosting and can be packaged by Capacitor.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
