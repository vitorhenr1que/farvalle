import Image from "next/image";
import { Carousel } from "./Carousel";
import styles from './style.module.scss'
import predioFarvalle from '../../../../public/predio.webp'
import { CourseBox } from "../CourseBox";
import { BlogMain } from "../BlogMain";
export function Main(){
    return(
        <>
        <Carousel/>
        <div className={styles.container}>
        <div className={styles.textContainer}>
            <div className={styles.paragraphContainer}>
                <h3>Presencial é a modalidade certa para você!</h3>
                <p>Na FARVALLE você encontra aulas 100% presenciais! Temos um campus pertinho de você em uma excelente localização, uma infraestrutura invejável de primeiro mundo, que junto ao nosso staff extremamente qualificado permite que você explore o máximo do seu potencial e se desenvolva de maneira exponencial!</p>
                <p>Ao conviver frequentemente com seus colegas e profissionais de renome você possui diversas vantagens, desde a formação de networking, ao compartilhamento de experiências, aprendizado de técnicas e formas de trabalhar e estudar com maior eficiência, e tudo isso comprovadamente forma profissionais mais bem sucedidos.</p>
            </div>
            <div className={styles.paragraphContainer}>
                <h3>Sobre a Faculdade</h3>
                <p>A história da Faculdade Regional do Valle, FARVALLE, está intimamente ligada ao percurso profissional e vida de sua idealizadora, a professora Vera Lúcia Suzart de Almeida Bellato Maciel. Nesse contexto, e diante de sua experiência na gestão, no ensino, pesquisa e extensão, pautados na capacidade inovadora e empreendedora, surgiu o interesse na criação da FARVALLE com o objetivo de contribuir para o desenvolvimento socioeconômico, cultural e ambiental da sociedade baiana.</p>
            </div>
            <Image className={styles.imgPredio} src={predioFarvalle} alt="" width={1080} height={1920}/>
        </div>
            <div className={styles.coursesContainer}>
                <div className={styles.courseBoxContainer}>
                        <CourseBox 
                        course="BACHARELADO EM ENFERMAGEM" 
                        image_url="https://www.souenfermagem.com.br/wp-content/uploads/2023/04/O-papel-do-enfermeiro-na-sociedade-atual-reflexoes-para-a-Semana-da-Enfermagem-_1_.webp" 
                        modality="Presencial" 
                        total_semestre="10"
                        url="/cursos/enfermagem" />
                        <CourseBox 
                        course="BACHARELADO EM FISIOTERAPIA" 
                        image_url="https://www.contabilizei.com.br/contabilidade-online/wp-content/uploads/2022/11/fisioterapeuta-autonomo.png" 
                        modality="Presencial" 
                        total_semestre="10" 
                        url="/cursos/fisioterapia"/>
                        <CourseBox 
                        course="LICENCIATURA EM PEDAGOGIA" 
                        image_url="https://teloseducacional.com.br/wp-content/uploads/2023/11/1-4.png" 
                        modality="Presencial" 
                        total_semestre="8" 
                        url="/cursos/pedagogia"/>
                </div>
            </div>
            {/* <div className={styles.blank}>

            </div> */}
            <BlogMain/>
        </div>
        
        
        </>
    )
}