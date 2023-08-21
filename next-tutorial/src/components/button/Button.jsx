import React from 'react'
import Link from 'next/link'
import styles from './button.module.css'

export default function Button({url,text}) {
    
 return (
   
    
    <Link href={url}>
        <button className={styles.button}>{text}</button>
    </Link>
    
  )
}
