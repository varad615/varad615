module.exports = {
    siteUrl: 'https://varadgundap.netlify.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/'
        }
      ]
    },
    sitemapSize: 5000,
    targetDirectory: 'public',
    exportTrailingSlash: true,
    exclude: ['/private/*'],
    transform: async (config, { dev, defaultHostname, isServer }) => {
      return {
        hostname: defaultHostname,
        exclude: ['/server-side-only']
      };
    }
  };