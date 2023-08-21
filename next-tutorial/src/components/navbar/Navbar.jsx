"use client"

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
export default function Navbar() {
  const session = useSession()
  const links = [
    {
      id:1,
      title: 'Home',
      path: '/'
    }
    ,
    {
      id:2,
      title: 'About',
      path: '/about'
    }
    ,
    {
      id:3,
      title: 'Contact',
      path: '/contact'
    }
    ,
    {
      id:4,
      title: 'Blog',
      path: '/blog'
    }
    ,
    {
      id:5,
      title: "Portfolio",
      path: '/portfolio'
    }
    ,
    {
      id:6,
      title: 'Dashboard',
      path: '/dashboard'
    }
  ]
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">Ebizmart</Link>
        <div className={styles.links}>
          <DarkModeToggle/>
          {links.map(link => (
            <Link className={styles.link} href={link.path} key={link.id}>{link.title}</Link>
          ))}
           {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
        </div>
    </div>
  )
}
