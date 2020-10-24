import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button} from '../components/Button'
import { motion } from "framer-motion"
import { useState,useEffect } from 'react'
import Layout from '../components/Layout'


const Home=(props)=> {
  const [isVisible,setIsVisible]=useState(true)

  // useEffect(() => {
  // fetch('http://localhost:3000/a').then(rs=>rs.json()).then(console.log).catch(console.log)
  // }, [])
  return (
    <Layout>
        
     {/* <Button animate={{ opacity: isVisible ? 1 : 0 }} onClick={()=>setIsVisible(false)}>Hello</Button>
     <Button  onClick={()=>setIsVisible(!isVisible)}>Hello</Button>
    */}

   
    </Layout  >
  )
}


export default Home