import styles from './style.module.scss'
import logo from '../../../../public/farvalle-logo-white.png'
import eMec from '../../../../public/e-mec.webp'
import qrCode from '../../../../public/qr-code-farvalle.svg'
import Image from 'next/image'
import Link from 'next/link'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export function FooterTwo(){
    return (
        <>
        <div className={styles.container}>
            <div className={styles.farvalleContainer}>
                <Link href={"/"}>
                <Image src={logo} className={styles.logo} alt='Logo Farvalle' width={150}/>
                </Link>
                <span>Situada em Amargosa, destaca-se como uma instituição de ensino superior comprometida com a excelência acadêmica e a formação de profissionais qualificados. Com cursos nas áreas de enfermagem, fisioterapia e pedagogia, a faculdade alia teoria e prática em sua metodologia de ensino.</span>
            </div>
            <div className={styles.addressContainer}>
                <strong>Endereço</strong>
                <span>Rua C, 127, Loteamento Hugo Nogueira, Centro, 45300-000, Amargosa, BA.</span>
                <div>
                    <span className={styles.email}>{process.env.NEXT_PUBLIC_FARVALLE_MAIL}</span>
                </div>
                <strong>+55 75 98870-8022</strong>
            </div>
            <div className={styles.linksContainer}>
                <strong>Links</strong>
                <div className={styles.links}>
                    <Link href={"/"}>Inicio</Link>
                    <Link href={"https://educacional.usecerbrum.net/inicio.aspx"} target='_blank'>Portal do Aluno</Link>
                    <Link href={"/publicacoes-institucionais"}>Calendário Acadêmico</Link>
                    <Link href={"/contato"}>Contato</Link>
                    <Link href={"/matricular"}>Inscreva-se</Link>
                </div>
            </div>
            <div className={styles.socialContainer}>
                <strong>Redes Sociais</strong>
                <div className={styles.iconsContainer}>
                <Link href={"https://api.whatsapp.com/send/?phone=5575988708022&text&type=phone_number&app_absent=0"} target='_blank' className={styles.iconCircle}>
                    <IoLogoWhatsapp size={24} color='#a15f40'/>
                </Link>
                <Link href={"https://www.instagram.com/farvalle/"} target='_blank' className={styles.iconCircle}>
                    <FaInstagram size={24} color='#a15f40'/>
                </Link>
                <Link href={"/"} target='_blank' className={styles.iconCircle}>
                    <FaFacebook size={24} color='#a15f40'/>
                </Link>
                <Link href={"/"} target='_blank' className={styles.iconCircle}>
                    <FaYoutube size={24} color='#a15f40'/>
                </Link>
                </div>
                <div className={styles.cadastroInstitucional}>
                    <div className={styles.eMec}>
                        <strong>Consulte o cadastro da instituição no sistema e-MEC</strong>
                        <Image src={eMec} width={150} alt='e-MEC logo'/>
                    </div>
                    <Link className={styles.qrContainer} href={"https://emec.mec.gov.br/emec/consulta-cadastro/detalhes-ies/d96957f455f6405d14c6542552b0f6eb/MjU0Mzk="} target='_blank'>
                        <Image src={qrCode} width={100} alt='qrCode e-MEC'/>
                    </Link>
                    
                </div>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <span>Faculdade Farvalle © 2025 - Todos os direitos reservados.</span>
            <div className={styles.developer}>
                <span>Desenvolvido por:</span>
            </div>
        </div>
        </>
        
    )
}