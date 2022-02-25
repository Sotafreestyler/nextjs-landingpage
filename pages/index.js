import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const MainContents = styled.p`
    font-size: 18px;
    color: blue;
    padding-bottom: 4px;
`

const SliderImage = styled.img`
  object-fit: cover;
  height: 500px;
  padding-bottom: 36px;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="#">LP制作</a>のテストです！
        </h1>

        <p className={styles.description}>
          このサイトはNext.jsプロジェクトでそうたが作りました。{' '}
        </p>  

        <SliderImage src={`https://it-web-life.com/wp-content/uploads/2020/09/create_react_app.png`} />
        <SliderImage src={`https://it-web-life.com/wp-content/uploads/2020/09/create_react_app.png`} />
        <SliderImage src={`https://it-web-life.com/wp-content/uploads/2020/09/create_react_app.png`} />
        <SliderImage src={`https://it-web-life.com/wp-content/uploads/2020/09/create_react_app.png`} />
        <SliderImage src={`https://it-web-life.com/wp-content/uploads/2020/09/create_react_app.png`} />
        <SliderImage src={`https://it-web-life.com/wp-content/uploads/2020/09/create_react_app.png`} />
        <SliderImage src={`https://it-web-life.com/wp-content/uploads/2020/09/create_react_app.png`} />



        <div className={styles.grid}>
{/*           <a href="https://www.instagram.com/sota_mu_fs/" className={styles.card}>
            <h2>Instagram &rarr;</h2>
            <p>フリースタイルフットボールについて発信しています！</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>TikTokアカウント &rarr;</h2>
            <p>サッカーのチュートリアルについて</p>
          </a> */}

{/*           <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>制作実績一覧 &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
