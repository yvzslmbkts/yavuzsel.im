import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function About() {
  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About ${siteMetadata.author}`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark">
          <p>
            I am Yavuz Selim Bektas, a Software Engineer at Garanti BBVA Technology. My interests
            span backend development (mainly in the Java stack) and frontend work.
          </p>
          <p>
            I graduated from Sabanci University with a double major in Computer Science and
            Engineering (B.S.) and Management (B.A.).
          </p>
          <p>I am also a full-time traveler, always looking for the next place to explore.</p>
        </div>
      </div>
    </>
  )
}
