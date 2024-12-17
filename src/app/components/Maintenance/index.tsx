import Image from 'next/image'
import logo from '../../../../public/farvalle-logo.png'
import styles from './style.module.scss'

export function Maintenance(){
    return (
        <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
            <Image className={styles.logo} src={logo} alt='logo farvalle' width={2000} height={2000}/>
        </div>
        
        <strong>
            Nosso site está em atualização! 🚧
        </strong>
        <p>
            Estamos trabalhando para oferecer a melhor experiência para você. Em breve, novidades estarão disponíveis aqui.
        </p>
        {/* <Image className={styles.imgFarvalle} src={'https://www.motivabolsas.com.br/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fbolsafacil-ba%2FZzYsPq8jQArT04lp_farvalle.webp%3Fauto%3Dformat%2Ccompress&w=3840&q=100'} alt='prédio farvalle' width={2000} height={2000}/> */}
        <p>&copy; 2024 Faculdade FARVALLE. Todos os direitos reservados.</p>
        
        </div>
        
    )
}