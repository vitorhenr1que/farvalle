import styles from './style.module.scss'

export function Loading(){
  return (
    <div className={`d-flex justify-content-center align-items-center text-primary ${styles.loadingDiv}`}>
    <div className={`spinner-border ${styles.spinner}`} role="status">
      
    </div>
  </div>
  )
}