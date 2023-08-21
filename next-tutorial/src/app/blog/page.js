import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  try {
    const res = await fetch('http://localhost:3000/api/posts');
    console.log('Fetch response:', res); // Log the fetch response
    if (!res.ok) {
      
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
  
    throw error;
  }
}


const  blog = async () => {
  const data = await getData()

  return (
    <div className={styles.mainContainer}>
     {data.map((item)=>(
       <Link  href={`/blog/${item._id}`}  className={styles.container} key={item.id}>
       <div className={styles.imgContainer}>
         <Image src={item.img} width={400} height={250} className={styles.image}/>
       </div>
       <div className={styles.content}>
         <h1 className={styles.title}>{item.title}</h1>
         <p className={styles.desc}>
         {item.desc}
         </p>
       </div>
       </Link>
     ))}
      
    </div>
  )
}
export default blog
