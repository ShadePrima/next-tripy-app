import styles from './page.module.scss'
import { About, Header, Navbar, Tour } from '@/components'

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <Navbar />
      <Header />
      <About />
      <Tour />
    </main>
  )
}
