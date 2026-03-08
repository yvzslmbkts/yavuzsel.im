import siteMetadata from '@/data/siteMetadata'

export default function HomeAbout() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
      <img
        src={siteMetadata.image}
        alt={siteMetadata.author}
        className="h-28 w-28 rounded-full object-cover"
      />
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
          {siteMetadata.author}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          I am a Software Engineer at Garanti BBVA Technology. My interests span backend development
          (mainly in the Java stack) and frontend work.
        </p>
        <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          I graduated from Sabanci University with a double major in Computer Science and
          Engineering (B.S.) and Management (B.A.). I am also a full-time traveler, always looking
          for the next place to explore.
        </p>
      </div>
    </div>
  )
}
