// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProfileMistake from './qcomps/profile_mistake'
import FirstComp from './qcomps/firstcomp'
import TodoList from "./qcomps/todos";
import Profile from "./components/profile_props"
import Gallery from "./qcomps/gallery_props"
import Square from "./components/square"

export default function Home() {
  return (
    <div className={styles.main}>
        <ProfileMistake/>
        <FirstComp/>
        <TodoList/>
        <Profile/>
        <Gallery/>
        <Square/>
    </div>
  )
}
