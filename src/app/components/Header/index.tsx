'use client'
import styles from './style.module.scss'
import logo from '../../../../public/farvalle-logo.png'
import logoIcon from '../../../../public/farvalle-icon.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiUser } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { HeaderMobile } from '../HeaderMobile'

export function Header(){
    const [toggle, setToggle] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()

    function handleDropDownMenuClick(toggleNumber: number){
        if(toggle === toggleNumber){
            return setToggle(0)
        }
        else{
           return setToggle(toggleNumber)
        }   
    }

    function handleDropDownItemClick(route: string){
        router.push(route)
        setToggle(0)
    }

    
    return showMenu === false ?  (
        
        <nav className={styles.nav}>
            <div className={styles.container}>
                <button className={styles.toggleMenu} onClick={() => setShowMenu(!showMenu)}>
                    <HiOutlineMenu size={32} />
                </button>
                <Link href={'/'} className={styles.logoContainer}>
                    <Image className={styles.logo} src={logo} alt='Farvalle Logo' priority/>
                    <Image className={styles.logoIcon} src={logoIcon} alt='Farvalle Logo' priority/>
                </Link>
                <ul className={`${styles.ul} dropdown-menu`} id='navbarNavDropdown'>
                <li className={`${styles.menuLink} nav-item`}>
                    <button className={styles.dropDownButton} onClick={() => handleDropDownMenuClick(1)}>
                        A FARVALLE
                        <ul className={toggle === 1 ? styles.dropDownMenu : styles.dropDownMenuOff}>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/posts/sobre')}>SOBRE</li>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/publicacoes-institucionais')}>PUBLICAÇÕES INSTITUCIONAIS</li>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/contato')}>CONTATO</li>
                        </ul>
                    </button></li>
                    <li className={`${styles.menuLink} nav-item`}>
                    <button className={styles.dropDownButton} onClick={() => handleDropDownMenuClick(2)}>
                        CURSOS
                        <ul className={toggle === 2 ? styles.dropDownMenu : styles.dropDownMenuOff}>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/cursos/enfermagem')}>ENFERMAGEM</li>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/cursos/fisioterapia')}>FISIOTERAPIA</li>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/cursos/pedagogia')}>PEDAGOGIA</li>
                        </ul>
                    </button></li>
                    <li className={`${styles.menuLink} nav-item`}><Link className={styles.link} href={"/contato"}>CONTATO</Link></li>
                    <li className={`${styles.menuLinkHr} nav-item`}><hr /></li>
                    <li className={`${styles.menuLink} nav-item`}><Link className={styles.linkSystem} target='_blank' href={"https://educacional.usecerbrum.net/inicio.aspx"}><BiUser className={styles.icon} size={24}/> <span>ACESSE O PORTAL</span></Link></li>
                    <li className={`${styles.menuLink} nav-item`}><Link className={styles.linkSignUp} href={"/matricular"}><span>INSCREVA-SE</span></Link></li>
                </ul>
            </div>

        </nav>
    ) : (<HeaderMobile showMenu={showMenu} setShowMenu={setShowMenu}/>)
}