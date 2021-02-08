import Head from 'next/head'
import Link from 'next/link'
import index from '../styles/index.module.css'

export default function Home() {
  return (

    <div className={index.container}>
      <Head>
        <title>Guilherme B. Guimarães</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={index.header}>
        <Link href="/">
          <a className={index.header}>Home</a>
        </Link>
      </header>

      <main className={index.main}>
        <h1 className={index.title}>
          <a className={index.black}>Hi, I'm </a><a className={index.blue}>Guilherme</a>
        </h1>

        <p className={index.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
        </p>

        <div className={index.update}>
          <div>
            <a className={index.profile}>
              <img src="/images/profile.jpg" alt="Profile Logo" className={index.image} />
            </a>
          </div>
          <div className={index.personal}>
            <p className={index.personal2}>
              <a>Guilherme B. Guimarães</a>
            </p>
            <div className={index.personal3}>
              <time>February 07 2021</time>
            </div>
          </div>
        </div>

        <div>
          <a href="https://github.com/gbguimaraes" target="_blank">
            <img src="/github.svg" alt="GitHub Logo" className={index.logo} />
          </a>
          
          <a href="https://www.linkedin.com/in/guilhermebguimaraes/" target="_blank">
            <img src="/linkedin.svg" alt="Linkedin Logo" className={index.logo} />
          </a>
          
        </div>

        {/* Navigate between pages use Link */}

        <div className={index.grid}> 
          
          <a className={index.card}>
            <h3>Documentation &rarr;</h3>
            <img src="/html5.svg" alt="HTML5" className={index.logo} />
            <img src="/css3.svg" alt="CSS3" className={index.logo} />
            <img src="/javascript.svg" alt="JavaScript" className={index.logo} />
            <img src="/bootstrap.svg" alt="Bootstrap" className={index.logo} />
          </a>
          
          <a className={index.card}>
            <h3>Documentation &rarr;</h3>
            <img src="/react.svg" alt="React" className={index.logo} />
            <img src="/nodejs.svg" alt="Node Js" className={index.logo} />
            <img src="/nextjs.svg" alt="Next Js" className={index.logo} />
            <img src="/python.svg" alt="Python" className={index.logo} />
          </a>

          <Link href="./about">
            <a className={index.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          
          <a href="https://nextjs.org/learn" className={index.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={index.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={index.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

      </main>

      <div className={index.footer}>
        <div className={index.link}><a className="link" href="https://github.com/gbguimaraes/gbguimaraes_portfolio">Source code on Github</a></div>
        
        <a>© 2021 Made with<img src="/heart-outline.svg" alt="Heart Logo" className={index.logofooter}/>Guilherme B. Guimarães</a>
      </div>
    </div>
  )
}