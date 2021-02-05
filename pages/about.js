import Head from 'next/head'
import Link from 'next/link'
import pages from '../styles/Pages.module.css'
import home from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={pages.container}>
      <Head>
        <title>Guilherme B. Guimarães</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={pages.main}>
        <h1 className={home.title}>
          <a>Guilherme B. Guimarães</a>
        </h1>

        <p className={home.description}>
          Get started by editing
        </p>

        <div>
          <a href="https://github.com/gbguimaraes">
            <img src="/github.svg" alt="GitHub Logo" className={pages.logo} />
          </a>
          
          <a href="https://www.linkedin.com/in/guilhermebguimaraes/">
            <img src="/linkedin.svg" alt="Linkedin Logo" className={pages.logo} />
          </a>
          
        </div>

        {/* Navigate between pages use Link */}
          
        <div className={home.grid}> 
          <Link href="./about">
            <a className={home.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          
          <a href="https://nextjs.org/learn" className={home.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={home.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={home.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        
        <div className={pages.backTo}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
        </div>
        
      </main>


      <footer className={pages.footer}>
        <div className={pages.link}><a className="link" href="https://github.com/gbguimaraes/gbguimaraes_portfolio">Source code on Github</a></div>
        
        <a>| Copyright © 2021 Guilherme B. Guimarães</a>
      </footer>
    </div>
  )
}