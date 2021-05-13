import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => import('../components/Typography/index.js'), []);
  return (
    <div className="container">
      <Head>
        <title>NextJS Web Component App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1 className="title">
          Welcome <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components!</a>
        </h1>
        <web-typography data-text="I am a Web Component" component="h1" />
      </main>
      <footer>
        <a
          href="https://www.frontendpills.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo.svg" alt="FrontendPills Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title {
          text-align: center;
        }

        .logo {
          height: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
