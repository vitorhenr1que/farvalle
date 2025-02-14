'use client'
import InputMask from '@mona-health/react-input-mask';
import styles from './style.module.scss'
import { useState } from "react";
function PhoneInput() {
   const [phone, setPhone] = useState('')
   console.log(phone)
  return (
    <div className={styles.inputContainer}>
        
            <label className={styles.inputLabel} htmlFor="phone">Telefone:</label>
            <div >
         <InputMask
          mask="(99) 99999-9999"
            placeholder="(XX) XXXXX-XXXX"
           
        >
            <input className={styles.informationInput} type='tel' name='phone' id='phone'/>
        </InputMask>
        </div>
    </div>
  );
}

export default PhoneInput;