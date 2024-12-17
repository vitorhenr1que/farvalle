import Image from "next/image";
import styles from './style.module.scss'

export function Carousel(){
    return (
    <div className="carousel-item active">
      <Image src="https://picsum.photos/1920/1080" className={`d-block w-100 ${styles.carouselImage}`} alt="..." width={1920} height={400}/>
    </div>
    )
}