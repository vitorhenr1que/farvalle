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

interface HeaderMobileProps{
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export function HeaderMobile({showMenu, setShowMenu}: HeaderMobileProps){
    const [toggle, setToggle] = useState(0)
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
        setShowMenu(false)
    }

    
    return showMenu === true ?  (
        
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.toggleContainer}>
                    <button className={styles.toggleMenu} onClick={() => setShowMenu(!showMenu)}>
                        <HiOutlineMenu size={32} />
                    </button>
                    <Link href={'/'} className={styles.logoContainer} onClick={() => setShowMenu(false)}>
                        <Image className={styles.logo} src={logo} alt='Farvalle Logo' priority/>
                        <Image className={styles.logoIcon} src={logoIcon} alt='Farvalle Logo' priority/>
                    </Link>
                </div>
                <ul className={`${styles.ul} dropdown-menu`} id='navbarNavDropdown'>
                <li className={`${styles.menuLink} nav-item`}>
                    <button className={styles.dropDownButton} onClick={() => handleDropDownMenuClick(1)}>
                        A FARVALLE
                        <ul className={toggle === 1 ? styles.dropDownMenu : styles.dropDownMenuOff}>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/posts/sobre')}>SOBRE</li>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/publicacoes-institucionais')}>PUBLICACOES INSTITUCIONAIS</li>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/contato')}>CONTATO</li>
                        </ul>
                    </button></li>
                    <li className={`${styles.menuLink} nav-item`}>
                    <button className={styles.dropDownButton} onClick={() => handleDropDownMenuClick(2)}>
                        GRADUAÇÃO
                        <ul className={toggle === 2 ? styles.dropDownMenu : styles.dropDownMenuOff}>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/cursos/enfermagem')}>ENFERMAGEM</li>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/cursos/fisioterapia')}>FISIOTERAPIA</li>
                            <li className={styles.dropDownItem} onClick={() => handleDropDownItemClick('/cursos/pedagogia')}>PEDAGOGIA</li>
                        </ul>
                    </button></li>
                    <li className={`${styles.menuLink} nav-item`}><Link onClick={() => setShowMenu(false)} className={styles.link} href={"/contato"}>CONTATO</Link></li>
                    <li className={`${styles.menuLinkHr} nav-item`}><hr /></li>
                    <li className={`${styles.menuLink} nav-item`}><Link onClick={() => setShowMenu(false)} className={styles.linkSystem} target='_blank' href={"https://educacional.usecerbrum.net/inicio.aspx"}><BiUser className={styles.icon} size={24}/> <span>ACESSE O PORTAL</span></Link></li>
                    <li className={`${styles.menuLink} nav-item`}><Link onClick={() => setShowMenu(false)} className={styles.linkSignUp} href={"/matricular"}><span>INSCREVA-SE</span></Link></li>
                </ul>
            </div>

        </nav>) : (<></>)
    
}