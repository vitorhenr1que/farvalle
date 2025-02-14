'use client'
import styles from './style.module.scss'
import Image from "next/image";
import PhoneInput from "../../components/PhoneInput";
import { IoMdTime, IoMdTimer } from "react-icons/io";
import { FormEvent, useEffect, useState, use } from "react";
import Link from "next/link";
import MotivaBolsas from '../../../../public/logo-branca.png'
import { getClient } from "../../services/prismic";
import { PrismicRichText } from "@prismicio/react";
import { CoursesDocumentData, Simplify } from "../../../../prismicio-types";
import { Loading } from '../../components/Loading';

interface ParamsProps {
    params: Promise<{id: string}>
}

export default function Cursos({params}: ParamsProps){


    const [toggle, setToggle] = useState(0)
    const [course, setCourse] = useState<Simplify<CoursesDocumentData>>()
    const { id } = use(params);
   

    async function handleSubmit(e: FormEvent){
        e.preventDefault()
    }

  
    
    console.log(course?.banner.url)
    useEffect(()=> {
        async function getCourse(){
            const client = getClient()
            const response = await client.getByUID('courses', id, {})
            const curso = response.data
            setCourse(curso)
        }
        getCourse()
    },[])
    console.log(id, course?.curso)
    return(
        
        <div className={styles.container}>
            {course?.banner.url ? (
            <>
            {/* Banner */}
            <div className={styles.imageContainer}>
                <Image className={styles.courseBanner} src={`${course?.banner.url}`} width={course?.banner.dimensions?.width} height={course?.banner.dimensions?.height} alt={`${course?.banner.alt}`}/>
                <div className={styles.courseName}>
                    <h1>{course?.curso}</h1>
                </div>
            </div>

            {/* Caixa de Informações */}
            <div className={styles.informationContainer}>
                <form className={styles.informationBox} onSubmit={handleSubmit}>
                    <strong className={styles.informationTitle}>MAIS INFORMAÇÕES: </strong>
                    <span className={styles.informationParagraph}>Se precisar de ajuda, informe seus dados e um de nossos atendentes entrará em contato com você!</span>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="nome">Nome: *</label>
                        <input id="nome" type="text" className={styles.informationInput} placeholder="Nome"/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="email">E-mail: *</label>
                        <input id="email" type="email" className={styles.informationInput} placeholder="E-mail"/>
                    </div>
                        <PhoneInput/>
                        <button type="submit" className={styles.submitButton}>Receba mais informações</button>
                </form>
            </div>

            {/* Parágrafo Curso */}
            <section className={styles.contentContainer}>
                <div className={styles.paragraphBox}>
                    
                    <p>{course?.descricao}</p>
                </div>
            </section>
            <section className={styles.contentInfoContainer}>
                <div className={styles.toggleInfoContainer}>
                    <div className={styles.toggleButtonContainer}>
                        <button onClick={() => setToggle(0)} className={styles.toggleButton}>DESCRIÇÃO DO CURSO</button>
                        <button onClick={() => setToggle(1)} className={styles.toggleButton}>MERCADO DE TRABALHO</button>
                        <button onClick={() => setToggle(2)} className={styles.toggleButton}>INFRAESTRUTURA</button>
                        <button onClick={() => setToggle(3)} className={styles.toggleButton}>ALGUMAS DISCIPLINAS</button>
                    </div>
                    <div className={styles.toggleTextContainer}>
                        {toggle === 0 && <PrismicRichText field={course?.descricao_extensa} components={
                            {
                                heading1: ({children}) => <p className={styles.headingOne}>{children}</p>,
                                heading2: ({children}) => <p className={styles.headingTwo}>{children}</p>,
                                heading3: ({children}) => <p className={styles.headingTree}>{children}</p>,
                                paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,}}
                            />}
                        {toggle === 1 && 
                        <div className={styles.mercadoTrabalhoContainer}>
                            
                            <PrismicRichText field={course?.mercado_de_trabalho} components={
                            {
                                heading1: ({children}) => <p className={styles.headingOne}>{children}</p>,
                                heading2: ({children}) => <p className={styles.headingTwo}>{children}</p>,
                                heading3: ({children}) => <p className={styles.headingTree}>{children}</p>,
                                paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,}}
                            />
                        </div>}
                        {toggle === 2 && <div className={styles.mercadoTrabalhoContainer}>
                            
                        <PrismicRichText field={course?.infraestrutura} components={
                            {
                                heading1: ({children}) => <p className={styles.headingOne}>{children}</p>,
                                heading2: ({children}) => <p className={styles.headingTwo}>{children}</p>,
                                heading3: ({children}) => <p className={styles.headingTree}>{children}</p>,
                                paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,}}
                            />
                        </div>}
                        {toggle === 3 && <PrismicRichText field={course?.disiplinas} components={
                            {
                                heading1: ({children}) => <p className={styles.headingOne}>{children}</p>,
                                heading2: ({children}) => <p className={styles.headingTwo}>{children}</p>,
                                heading3: ({children}) => <p className={styles.headingTree}>{children}</p>,
                                paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,}}
                            />}
                    </div>
                </div>
                <div className={styles.infoCourseContainer}>
                    <div className={styles.duration}>
                        <span className={styles.modalidade}>{course?.modalidade}</span>
                    </div>
                    <hr className={styles.infoHr}/>
                    <div className={styles.doubleDiv}>
                        <div className={styles.duration}>
                            <IoMdTime size={32}/>
                            <span>{course?.semestres?.toUpperCase()}</span>
                        </div>
                        <hr />
                        <div className={styles.duration}>
                            <strong className={styles.parceiros}>PARCEIROS DE BOLSA:</strong>
                            <Link href={`https://motivabolsas.com.br/farvalle/${id}`}>
                                <Image src={MotivaBolsas} height={40} alt="Motiva Bolsas"/>
                            </Link>
                        </div>
                    </div>
                    <hr className={styles.infoHr}/>
                    <Link href={"/matricular"} className={styles.linkButton}>Inscreva-se agora!</Link >
                </div>
            </section>
            </>) : <Loading/>}
            
        </div>
    )
}