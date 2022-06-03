/* eslint-disable @typescript-eslint/no-explicit-any */
import GAScript from './GoogleAnalytics'
import Plausible from './Plausible'
import SimpleAnalytics from './SimpleAnalytics'
import Umami from './Umami'
import siteMetadata from '@/data/siteMetadata'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    plausible?: (...args: any[]) => void
    sa_event?: (...args: any[]) => void
  }
}

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  console.log('isProduction' + isProduction)
  console.log(
    'analytics values ' +
      process.env.GOOGLE_ANALYTICS_ID +
      ' and ' +
      siteMetadata.analytics.googleAnalyticsId
  )

  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GAScript />}
    </>
  )
}

export default Analytics
