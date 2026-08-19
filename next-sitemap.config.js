/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.petro411.com',
  generateRobotsTxt: true,
   exclude: [
    '/owners/*', 
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/owners/*'],
      },
    ],
  },

}
