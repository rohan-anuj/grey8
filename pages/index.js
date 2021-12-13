import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import Header from '../components/Header'
export default function Home() {
  return (
    <div  className=" flex-col  h-screen  mt-5 border-2 border-black items-center">
      <Head>
        <meta name="description" description="" />
        <title>grey8/Home</title>

      </Head>
      <Header/>
      
     

  
     
    </div>
  )
}
