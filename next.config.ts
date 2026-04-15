import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntl({
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    reactStrictMode: true,
  }),
);
