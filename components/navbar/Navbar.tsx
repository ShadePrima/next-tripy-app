import React from 'react'
import Image from 'next/image'

import logo from '../../assets/icons/logo.svg'

import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.root}>
      <Image src={logo} alt='logo' />

      <ul className={styles.nav}>
        <li className={styles.active}>
          <p>Home</p>
          <div className={styles.icon} />
        </li>
        <li>About</li>
        <li>Services</li>
        <li>Price </li>
        <li>Contact</li>
      </ul>

      <div className={styles.auth}>
        <div className={styles.login}>Login</div>
        <div className={styles.register}>Register</div>
      </div>
    </div>
  )
}

export default Navbar
