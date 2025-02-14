import styles from './style.module.scss'
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

export function Footer(){
    return (
        <div className={styles.container}>
            <div className={styles.iconsContainer}>
                <Link href={"https://api.whatsapp.com/send/?phone=5575988708022&text&type=phone_number&app_absent=0"} target='_blank' className={styles.iconCircle}>
                    <IoLogoWhatsapp size={24} color='#3f3f3f'/>
                </Link>
                <Link href={"https://www.instagram.com/farvalle/"} target='_blank' className={styles.iconCircle}>
                    <FaInstagram size={24} color='#3f3f3f'/>
                </Link>
                <Link href={"/"} target='_blank' className={styles.iconCircle}>
                    <FaFacebook size={24} color='#3f3f3f'/>
                </Link>
                <Link href={"/"} target='_blank' className={styles.iconCircle}>
                    <FaYoutube size={24} color='#3f3f3f'/>
                </Link>
            </div>
            <ul className={styles.ul}>
                <li>Início</li>
                <li>Sobre a Faculdade</li>
                <li>Parceiros de Bolsa</li>
                <li>Contato</li>
                <li>Trabalhe conosco</li>
            </ul>
            <span>© 2025 por <strong>FARVALLE</strong></span>
        </div>
    )
}