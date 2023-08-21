"use client"

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
    const [err, setErr] = useState(false)
    const router = useRouter()


    const handleSubmit =  async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/Login?success=Account has been created");
    } catch (err) {
      setErr(err);
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder="Username" required />
        <input className={styles.input} type="email" placeholder="Email" required />
        <input className={styles.input} type="password" placeholder="Password" required />
        <button className={styles.button}>Register</button>
      </form>
      {err && <p className={styles.error}>Error</p>}
      <Link href="/dashboard/Login">Login with an existing account</Link>

    </div>
  )
}

