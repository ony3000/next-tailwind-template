import Head from 'next/head';
import Image from 'next/image';
import classNames from 'classnames';
import BoxLink from '@/components/BoxLink';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Tailwind Template</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div
          className={classNames(
            'z-[2] w-full max-w-[1100px] font-mono text-[12.8px] [display:inherit] [align-items:inherit] [justify-content:inherit]',
            'tablet:text-[13.6px]',
          )}
        >
          <p
            className={classNames(
              'fixed flex w-full justify-center',
              'inset-0 bottom-auto m-0 items-center rounded-none border-b border-solid bg-gradient-to-b bg-clip-padding px-4 pt-8 pb-[22.4px] backdrop-blur-xl',
              'border-zinc-400/25 from-gray-300 to-gray-100/50',
              'dark:border-neutral-500/25 dark:from-black dark:to-neutral-900/50',
              'tablet:block tablet:w-auto',
              'tablet:relative tablet:bottom-0 tablet:rounded-xl tablet:border tablet:bg-none tablet:bg-clip-border tablet:py-4 tablet:backdrop-filter-none',
              'tablet:border-zinc-400/30 tablet:bg-gray-100/50',
              'dark:tablet:border-neutral-500/30 dark:tablet:bg-neutral-900/50',
            )}
          >
            Get started by editing&nbsp;
            <code className="font-bold">src/pages/index.tsx</code>
          </p>
          <div
            className={classNames(
              'fixed flex w-full justify-center',
              'pointer-events-none inset-0 top-auto z-[1] h-[200px] items-end bg-gradient-to-b from-transparent p-8',
              'to-[#fff_40%]',
              'dark:to-[#000_40%]',
              'tablet:block tablet:w-auto',
              'tablet:pointer-events-auto tablet:static tablet:z-auto tablet:h-auto tablet:bg-none tablet:p-0',
            )}
          >
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="flex items-center justify-center gap-2 p-4 tablet:p-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div
          data-testid="center-element"
          className={classNames(
            'relative flex w-max items-center justify-center pt-32 pb-24',
            'before:absolute before:left-1/2 before:blur-[45px] before:content-[""]',
            'before:-ml-[400px] before:h-[300px] before:w-[480px] before:transform-none before:rounded-full',
            'after:absolute after:left-1/2 after:blur-[45px] after:content-[""]',
            'after:-z-[1] after:h-[180px] after:w-60 after:translate-z-0',
            'before:bg-radial before:from-white before:to-white/0',
            'after:bg-conic-from-b after:[--tw-gradient-stops:#38bdf833_0deg,#0ea5e933_55deg,#67e8f933_120deg,#2563eb33_160deg,transparent_360deg]',
            'dark:before:bg-gradient-to-br dark:before:from-blue-700/0 dark:before:via-blue-700/0 dark:before:to-blue-700/30',
            'dark:after:bg-radial dark:after:from-blue-700/40 dark:after:to-blue-700/0',
            'tablet:py-16 tablet:before:h-[360px] tablet:before:translate-z-0',
          )}
        >
          <Image
            className="relative dark:drop-shadow-[0_0_4.8px_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div
            className={classNames(
              'relative ml-4 flex h-[75px] w-[75px] items-center justify-center overflow-hidden rounded-xl px-2.5 py-[25px] shadow-[0_2px_8px_-1px_#0000001a] translate-z-0',
              'before:absolute before:-z-[1] before:content-[""]',
              'before:bg-conic-from-t before:h-[200%] before:w-[200%]',
              'after:absolute after:-z-[1] after:content-[""]',
              'after:inset-0 after:rounded-xl after:bg-gradient-to-br after:bg-clip-content after:p-px',
              'before:[--tw-gradient-stops:#00000080,#00000040,#00000030,#00000020,#00000010,#00000010,#00000080]',
              'after:from-slate-100 after:to-gray-200',
              'dark:before:[--tw-gradient-stops:#ffffff80,#ffffff40,#ffffff30,#ffffff20,#ffffff10,#ffffff10,#ffffff80]',
              'dark:after:from-slate-900 dark:after:to-black',
              'motion-safe:before:animate-spin motion-safe:before:[animation-duration:6s] motion-safe:before:[animation-direction:reverse]',
            )}
          >
            <Image
              className="dark:drop-shadow-[0_0_4.8px_#ffffff70] dark:invert"
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div
          className={classNames(
            'mb-[120px] grid w-[1100px] max-w-xs grid-cols-1 text-center',
            'tablet:mb-0 tablet:max-w-full tablet:grid-cols-2 tablet:text-start',
            'desktop:grid-cols-4',
          )}
        >
          <BoxLink
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Docs"
            description="Find in-depth information about Next.js features and API."
          />

          <BoxLink
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />

          <BoxLink
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Templates"
            description="Discover and deploy boilerplate example Next.js projects."
          />

          <BoxLink
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy"
            description="Instantly deploy your Next.js site to a shareable URL with Vercel."
          />
        </div>
      </main>
    </>
  );
}
