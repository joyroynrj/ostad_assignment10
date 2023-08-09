import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className='bodycontent'>
            <h1>Hello this is my first project with Next JS</h1>
        </div>
      </div>
    </main>
  )
}
