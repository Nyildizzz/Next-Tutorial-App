import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'
import Button from '@/components/button/button'


export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.items}>
      <h1 className={styles.title}>Better Design For Your Digital Products.</h1>
      <p className={styles.description}>Design is not just what it looks like and feels like. Design is how it works.</p>
      <Button url="/portfolio" text="See Our Jobs" />
    </div>
    <div className={styles.items}></div>
      <Image className={styles.image} width={500} height={500} src={hero} alt="hero" />
   </div>
  )
}
