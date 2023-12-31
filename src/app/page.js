import styles from './page.module.css'
import { Autour_One } from 'next/font/google'
import LoginButton from './components/LoginButton'

const autour_one = Autour_One({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={[styles.main, styles.gradientBackground].join(' ')}>
      <h1 className={styles.title}>
        <img
          src="/FullerArchive.png"
          width={600}
          height={240}
          alt="FullerArchive Logo"
        />
      </h1>
      <LoginButton />
    </main>
  )
}
