'use client'
import { BsSendCheck } from 'react-icons/bs'
import { MdWhatsapp } from 'react-icons/md'
import styles from './style.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Matriz(){
    const route = useRouter()
    console.log('AQUIIIII!!!', route)
    function backRoute(){
        return route.back()
    }

return (
    <div className={styles.matrizContainer}>
        <div className={styles.matrizGrid}>
            <div className={styles.a}>
                <BsSendCheck size={132} color='#3f4c41'/>
            </div>
            <div className={styles.b}>
                <p>Sua inscrição foi enviada! 

                </p>
            </div>
            <div className={styles.c}>
                <p>Em breve, você receberá por e-mail o resultado da avaliação de sua redação, onde você poderá verificar se está aprovado(a) para prosseguir com o seu processo de matrícula.</p>
            </div>
            <div className={styles.d}>
            <Link href="#" onClick={() => backRoute()} className={styles.linkBack}>
                    <span>VOLTAR</span>
                </Link>
            </div>
        </div>
    </div>
)
}