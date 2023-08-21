"use client"


import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const session = useSession()
  const router = useRouter()
  if(session.status === "authenticated"){
    router.push("/dashboard")
  }
  if(session.status === "loading"){
    return <h1>Loading...</h1>
  }
 

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email,password})
  }

  return (
    <div className={styles.container}>
       <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="email" placeholder="Email" required />
        <input className={styles.input} type="password" placeholder="Password" required />
        <button className={styles.button}>Login</button>
        <button onClick={() => signIn("google")} className={styles.button}>Login with Google</button>
      </form>
       

        
    </div>
  )
}
