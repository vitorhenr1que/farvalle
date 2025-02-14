import Image from "next/image";
import styles from './style.module.scss'
import banner from '../../../../../public/farvalle-banner.jpg'

export function Carousel(){
    return (
    <div className={styles.carouselItem}>
      <Image src={banner} className={`d-block w-100 ${styles.carouselImage}`} alt="..." quality={100} width={1920} height={500}/>
    </div>
    )
}