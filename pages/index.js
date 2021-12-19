import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Contact from '../components/Contact'

import Header from '../components/Header'
export default function Home() {
  return (
    <div  className=" flex flex-col justify-between  h-max  mt-5 border-2 border-black ">
      <Head>
        <meta name="description" description="" />
        <title>grey8/Home</title>

      </Head>
      <Header/>
      <div className='w-full flex items-center p-4 border-2 justify-between'> 
      
      <Contact />
      </div>
      
      
     

  
     
    </div>
  )
}
