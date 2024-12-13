import styles from './style.module.scss'
import logo from '../../../../public/farvalle-logo.png'
import Image from 'next/image'
export function Header(){
    return(
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} src={logo} alt='Farvalle Logo'/>
                </div>
                <button type="button" className="btn btn-primary">Primary</button>
                <ul className={`${styles.ul} dropdown-menu`} id='navbarNavDropdown'>
                    <li className={`${styles.menuLink} nav-item`}>Inicio</li>
                    <li className={`${styles.menuLink} nav-item`}>Cursos</li>
                    <li className={`${styles.menuLink} nav-item`}>Processo Seletivo</li>
                    <li className={`${styles.menuLink} nav-item`}>Trabalhe Conosco</li>
                    <li className={`${styles.menuLink} nav-item`}>Contato</li>
                    <li className={`${styles.menuLink} nav-item`}>Sobre</li>
                </ul>
            </div>
        </nav>
    )
}