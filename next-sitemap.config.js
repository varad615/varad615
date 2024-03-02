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
    sitemapSize: 50000,
    targetDirectory: 'public',
    exportTrailingSlash: true,
    exclude: ['/server-side-only'],
  };