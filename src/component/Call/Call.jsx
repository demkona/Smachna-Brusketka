'use client'
import Link from 'next/link'
import styles from './call.module.scss'
import Image from 'next/image'
import phone from './phone.png'

export default function Call() {
  return (
    <div className={styles.container}>
            <Link className={styles.link} href={"tel:+380967843584"}>
            <Image src={phone} width={16} height={16}></Image></Link>
    </div>
  )
}
