'use client'

import React from 'react'
import Image from 'next/image'

import logo from '../../assets/icons/logo.svg'

import styles from './Navbar.module.scss'

const navList = [
  { id: 1, text: 'Home', active: true },
  { id: 2, text: 'About', active: false },
  { id: 3, text: 'Services', active: false },
  { id: 4, text: 'Price', active: false },
  { id: 5, text: 'Contact', active: false },
]

const Navbar = () => {
  const [active, setActive] = React.useState(1)

  console.log(active, 'active')

  return (
    <div className={styles.root}>
      <Image src={logo} alt='logo' />

      <ul className={styles.nav}>
        {navList.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`
            ${item.id === active ? styles.active : styles.disabled}  
          `}
          >
            <p>{item.text}</p>
            <div
              className={`
                ${item.id === active ? styles.iconActive : styles.icon} 
            `}
            />
          </li>
        ))}
      </ul>

      <div className={styles.auth}>
        <div className={styles.login}>Login</div>
        <div className={styles.register}>Register</div>
      </div>
    </div>
  )
}

export default Navbar
