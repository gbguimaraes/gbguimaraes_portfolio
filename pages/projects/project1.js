import Head from 'next/head'
import Link from 'next/link'
import index from '../../styles/index.module.css'

export default function Home() {
  return (

    <div className={index.container}>
      <Head>
        <title>Project 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={index.header}>
        <Link href="/">
          <a className={index.header}>Home</a>
        </Link>
      </header>

      <main className={index.main}>
        <h1 className={index.title}>
          <a className={index.blue}>Project Number One</a>
        </h1>

        <p className={index.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
        </p>


        {/* Navigate between pages use Link */}

        <div className={index.grid}> 
                    
            <a className={index.extend}>
                <p className={index.padding}>Project Number One</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
                </p>
            </a>
          
        </div>

        <div className={index.backTo}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
        </div>

      </main>

      <div className={index.footer}>
        <div className={index.link}>
          <a className="link" href="https://github.com/gbguimaraes/gbguimaraes_portfolio" target="_blank">Source code on Github</a>
        </div>
        <div>
        <a>© 2021 Made with<img src="/heart-outline.svg" alt="Heart Logo" className={index.logofooter}/>Guilherme B. Guimarães</a>
        </div>
      </div>
    </div>
  )
}