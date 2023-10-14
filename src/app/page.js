import styles from './page.module.css'
import { Autour_One } from 'next/font/google'
import LoginButton from './components/LoginButton'

const autour_one = Autour_One({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={[styles.main, styles.gradientBackground].join(' ')}>
      <h1 className={styles.title}>
        <a className={autour_one.className}>FullerTube</a>
      </h1>
      <LoginButton />
    </main>
  )
}
