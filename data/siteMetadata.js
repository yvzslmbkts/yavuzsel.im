const siteMetadata = {
  title: 'yavuzsel.im',
  author: 'Yavuz Selim Bektas',
  headerTitle: 'yavuzsel.im',
  description: 'Personal website and blog for Yavuz Selim Bektas',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://yavuzsel.im',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'yvzslmbkts@gmail.com',
  github: 'https://github.com/yvzslmbkts',
  twitter: 'https://twitter.com/yvzslmbkts',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/yavuz-selim-bektas',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, // e.g. UA-000000-2 or G-XXXXXXX
  },
}

module.exports = siteMetadata
