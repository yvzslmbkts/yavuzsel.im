/* eslint-disable @typescript-eslint/no-explicit-any */
import GAScript from './GoogleAnalytics'
import siteMetadata from '@/data/siteMetadata'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return <>{isProduction && siteMetadata.analytics.googleAnalyticsId && <GAScript />}</>
}

export default Analytics
