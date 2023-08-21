import Image from 'next/image'
import styles from './page.module.scss'
import { Navbar } from '@/components'

export default function Home() {
  return (
    <main className={`${styles.main} ${'container'}`}>
      <Navbar />
    </main>
  )
}
