import styles from './style.module.scss'
interface CourseProps {
    course: string,
    description: string,
    class_time: string,
    duration: string,
    market: string[],
    diferentials: string[],
}

export function Course({course, description, class_time, duration, market, diferentials}: CourseProps){
    return(
<div className={styles.container}>
    <div className={styles.textContainer}>
        <h1>{course}</h1>
        <div className={styles.information}>
            <p><strong>Sobre o Curso:</strong> {description}</p>
            <p><strong>Horário das Aulas:</strong> {class_time}</p>
            <p><strong>Duração:</strong> {duration}</p>
        </div>
        <div>
        <p><strong>Por que escolher este curso?</strong></p>
            <ul className={styles.ul}>
              {market.map((item, index) => (
                <li className={styles.li} key={index}>{item}</li>
              ))}
            </ul>
        </div>
        <div>
        <p><strong>Diferenciais do Curso:</strong></p>
            <ul className={styles.ul}>
              {diferentials.map((item, index) => (
                <li className={styles.li} key={index}>{item}</li>
              ))}
            </ul>
        </div>
        
    </div>
</div>
    )
}