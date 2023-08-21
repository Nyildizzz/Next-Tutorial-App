import React from 'react'
import styles from './page.module.css'
import Button from '../../../components/button/Button'
import Image from 'next/image'
export default function Category({params}) {
  return (

    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="@" fill={true} className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Products</h1>
          <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="@" fill={true} className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Tools</h1>
          <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="@" fill={true} className={styles.img}/>
        </div>
      </div>
    </div>
  )
}
