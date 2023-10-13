import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={[styles.main, styles.gradientBackground].join(' ')}>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Autour+One&display=swap');
        </style>
      </head>
      <h1 className={styles.title}>
        <a style={{ fontFamily: 'Autour One, sans-serif'}}>FullerTube</a>
      </h1>
    </main>
  )
}
