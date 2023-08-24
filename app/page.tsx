import styles from './page.module.scss'
import { About, Footer, Header, Navbar, Testimonial, Tour } from '@/components'

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <Navbar />
      <Header />
      <About />
      <Tour />
      <Testimonial />
      <Footer />
    </main>
  )
}
