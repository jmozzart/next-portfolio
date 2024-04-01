/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});
  
  const nextConfig = {
    images: {
    //    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ]


    }

    
};

   
  //module.exports = withBundleAnalyzer(nextConfig)



export default bundleAnalyzer(nextConfig);


