import Image from 'next/image'
import styles from './styles.module.scss'

interface CouseBoxProps{
    course: string,
    modality: string,
    total_semestre: string,
    image_url: string
}

export function CourseBox({course, modality, total_semestre, image_url}: CouseBoxProps){
    return (
        <div className={styles.courseBox}>
                        <div className={styles.flexBoxContainer}>
                            <div className={styles.textDiv}>
                                <div className={styles.courseAndModel}>
                                    <h3>{course}</h3>
                                    <div className={styles.presencial}>
                                        <span>{modality}</span>
                                    </div>
                                </div>
                                <span>{total_semestre} semestres</span>
                            </div>
                            <Image className={styles.courseImage} src={image_url} alt="" width={120} height={120}/>
                        </div>
                        <button className={styles.buttonMore}>SAIBA MAIS</button>
                    </div>
    )
}