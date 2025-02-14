'use client'
import styles from './style.module.scss'
import { IoCalendarNumber } from "react-icons/io5";
import { BiSolidFilePdf } from "react-icons/bi";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getClient } from '../services/prismic';
import { ArquivosDocumentData, Simplify } from '../../../prismicio-types';
import { Loading } from '../components/Loading';
import { FilledLinkToMediaField, LinkToMediaField } from '@prismicio/client';

export default function PublicacoesInstitucionais(){
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [regulamentosOpen, setRegulamentosOpen] = useState(false)
    const [archives, setArchives] = useState<Simplify<ArquivosDocumentData>>()
    const [loading, setLoading] = useState(false)
    const [calendario, setCalendario] = useState<FilledLinkToMediaField>()
    const [regulamento, setRegulamento] = useState<FilledLinkToMediaField>()

    useEffect(() => {
        async function getArchives(){
            setLoading(true)
            try{
            
            const client = getClient()
            const response = await client.getByUID('arquivos', 'publicacoes-institucionais', {})
            const data = response.data
            console.log(data)
            setArchives(data)
            setCalendario(data.calendario_academico as FilledLinkToMediaField)
            setRegulamento(data.regulamento_institucional as FilledLinkToMediaField)
            setLoading(false)
            }catch(e){
                console.log(e)
                setLoading(false)
            }
        }
        console.log(archives)
        getArchives()
        
    }, [])
    return loading ? (<Loading/>) : 
    (
        <div className={styles.container}>
            <h1>Publicações Institucionais</h1>
        <div className={styles.publicacaoContainer}>
            <div className={styles.publicationDiv}>
                <button className={styles.publicacao} onClick={() => setCalendarOpen(!calendarOpen)}>
                    <IoCalendarNumber size={50}/>
                    <span>Calendário Acadêmico</span>
                </button>
                {calendarOpen && 
                    <div className={styles.divUrl}>
                        <Link href={`${calendario?.url}`} target='_blank'>{calendario?.name}</Link>
                    </div>}
            </div>
            <div className={styles.publicationDiv}>
                <button className={styles.publicacao} onClick={() => setRegulamentosOpen(!regulamentosOpen)}>
                    <BiSolidFilePdf size={50}/>
                    <span>Regulamentos Institucionais</span>
                </button>
                {regulamentosOpen && 
                <div className={styles.divUrl}>
                    <Link href={`${regulamento?.url}`} target='_blank'>{regulamento?.name}</Link>
                </div>}
            </div>
        </div>
        </div>
    )
}