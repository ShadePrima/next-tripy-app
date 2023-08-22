import styles from './page.module.scss'
import { About, Header, Navbar } from '@/components'

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <Navbar />
      <Header />
      <About />
    </main>
  )
}
