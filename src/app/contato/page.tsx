'use client'
import styles from './style.module.scss'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import InputMask from '@mona-health/react-input-mask';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Loading } from '../components/Loading';
import { QuillEditor } from '../components/QuillEditor';

export default function Contato(){
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState("");
    const [dirty, setDirty] = useState(false);
    function verifyEmail(email: FormDataEntryValue){
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if(regexEmail.test(`${email}`)){
          return email
        }
        else {
          return false
        }
      }
    
      async function handleSubmit(e: FormEvent){
        e.preventDefault()
        setLoading(true)

         
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
 
        console.log('ESTE SÃO OS DADOS DO FORMULÁRIO:', data)
        
        if(verifyEmail(data.email)){

        } else {
          setLoading(false)
          return alert('Insira um e-mail válido!')
        }


         try {
            await axios.post('api/contato', {
              nome: data.nome,
              sobrenome: data.sobrenome,
              email: data.email,
              tel: data.tel,
              text: code
            })

          

          setLoading(false) 

          alert('Contato Enviado!')

        } catch(err){
          console.log(err, 'Erro com o envio do formulário')
          alert(`Erro com o envio do formulário: \n\n Verifique se todas as informações estão preenchidas corretamente.`)
          setLoading(false)
        } 
      }

    return(
        <div className={styles.container}>
            <div className={styles.contactUsContainer}>
                <h1>Contato</h1>
                <p>Tem dúvidas, sugestões ou precisa de mais informações sobre nossos cursos e serviços? Nossa equipe está pronta para ajudar!</p>
                <div className={styles.infoContainer}>
                    <div className={styles.infoItem}>
                        <BsTelephone size={20}  color='#a15f40'/>
                        <span>(75) 98870-8022</span>
                    </div>
                    <div className={styles.infoItem}>
                        <MdOutlineMailOutline size={20} color='#a15f40'/>
                        <span>{process.env.NEXT_PUBLIC_FARVALLE_MAIL}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <BsGeoAlt size={20} color='#a15f40'/>
                        <span>Rua C, 127, Loteamento Hugo Nogueira, Centro, 45300-000</span> 
                    </div>
                </div>
            </div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div className={styles.spaceFormDiv}>
                    <label htmlFor="nome">Nome</label>
                    <div className={styles.nomeDiv}>
                        <input type='text' id='nome' required name='nome' placeholder='Nome' />
                        <input type='text' id='sobrenome' required name='sobrenome' placeholder='Sobrenome'/>
                    </div>
                </div>
                <div className={styles.spaceFormDiv}>
                    <label htmlFor="email">E-mail</label>
                    <div className={styles.inputDiv}>
                        <input type='email' id='email' required name='email' placeholder='E-mail' />
                    </div>
                </div>
                <div className={styles.spaceFormDiv}>
                    <label htmlFor="tel">Celular</label>
                    <div className={styles.inputDiv}>
                        <InputMask
                            mask="(99) 99999-9999"
                            placeholder="(XX) XXXXX-XXXX">
                            <input className={styles.input} required type='tel' name='tel' id='tel'/>
                        </InputMask>
                    </div>
                </div>
                <div className={styles.spaceFormDiv}>
                    <label htmlFor="message">Mensagem</label>
                    <div className={styles.inputDivText}>
                        <QuillEditor value={code} onChange={setCode} dirty={dirty} setDirty={setDirty} placeholder='Digite sua mensagem...'/>
                    </div>
                </div>
                <button type="submit" disabled={!dirty} className={dirty ? styles.submitButton : styles.submitButtonDisabled}>{loading ? <Loading/> : "Enviar"}</button>
            </form>
        </div>
    )
}