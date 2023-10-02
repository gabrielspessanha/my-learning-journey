import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Página principal</title>

    </Head>
    <main className={styles.main}>
      <h1>Hello world</h1>
    </main>
    </>
    
  )
}

export default Home