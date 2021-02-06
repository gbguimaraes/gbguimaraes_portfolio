import Head from 'next/head'
import Link from 'next/link'
import pages from '../styles/Pages.module.css'
import home from '../styles/Home.module.css'
import about from '../styles/About.module.css'

export default function Home() {
  return (
      <div className={pages.container}>
        <nav className={pages.nav}>
          <Link href="/">
          <a className={pages.card}>Home</a>
          </Link>

          <Link href="./about">
          <a className={pages.card}>About</a>
          </Link>

        </nav>

        <Head>
          <title>About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={pages.main}>

          <a className={about.profile}>
              <img src="/images/profile.jpg" alt="Profile Logo" className={about.image} />
          </a>


          <h1 className={home.title}>
            <a>Guilherme B. Guimarães</a>
          </h1>

          <p className={about.description}>
            About me
          </p>

          <div>
            <a href="https://github.com/gbguimaraes" target="_blank">
              <img src="/github.svg" alt="GitHub Logo" className={pages.logo} />
            </a>
            
            <a href="https://www.linkedin.com/in/guilhermebguimaraes/" target="_blank">
              <img src="/linkedin.svg" alt="Linkedin Logo" className={pages.logo} />
            </a>
            
          </div>

          {/* Navigate between pages use Link */}

          <div className={about.grid}> 
            <a className={about.card}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.</p>
            </a>
          </div>

          <div className={about.grid2}> 
          
            <a className={about.card2}>
              <h3>Skills</h3>
              <p>
                <a><img src="/html5.svg" alt="HTML5" className={pages.logo} /></a>
                <a><img src="/css3.svg" alt="CSS3" className={pages.logo} /></a>
                <a><img src="/javascript.svg" alt="JavaScript" className={pages.logo} /></a>
                <a><img src="/bootstrap.svg" alt="Bootstrap" className={pages.logo} /></a>
              </p>
            </a>
            <a className={about.card2}>
              <h3>Learning</h3>
              <p>
                <a><img src="/react.svg" alt="React" className={pages.logo} /></a>
                <a><img src="/nodejs.svg" alt="Node Js" className={pages.logo} /></a>
                <a><img src="/nextjs.svg" alt="Next Js" className={pages.logo} /></a>
                <a><img src="/python.svg" alt="Python" className={pages.logo} /></a>
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
          
          <a>© 2021 Made with<img src="/heart-outline.svg" alt="Heart Logo" className={pages.logofooter}/>Guilherme B. Guimarães</a>
        </footer>
      </div>
  )
}
