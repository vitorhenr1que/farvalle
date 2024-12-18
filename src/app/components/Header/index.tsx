import styles from './style.module.scss'
import logo from '../../../../public/farvalle-logo.png'
import Image from 'next/image'
import Link from 'next/link'
export function Header(){
    return(
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} src={logo} alt='Farvalle Logo'/>
                </div>
                <ul className={`${styles.ul} dropdown-menu`} id='navbarNavDropdown'>
                    <li className={`${styles.menuLink} nav-item`}><Link className={styles.link} href={""}>Inicio</Link></li>
                    <li className={`${styles.menuLink} nav-item`}><Link className={styles.link} href={""}>Cursos</Link></li>
                    <li className={`${styles.menuLink} nav-item`}><Link className={styles.link} href={""}>Processo Seletivo</Link></li>
                    <li className={`${styles.menuLink} nav-item`}><Link className={styles.link} href={""}>Trabalhe Conosco</Link></li>
                    <li className={`${styles.menuLink} nav-item`}><Link className={styles.link} href={""}>Contato</Link></li>
                    <li className={`${styles.menuLink} nav-item`}><Link className={styles.link} href={""}>Sobre</Link></li>
                </ul>
            </div>
        </nav>
    )
}