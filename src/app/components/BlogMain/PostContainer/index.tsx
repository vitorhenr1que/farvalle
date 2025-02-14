import Image from 'next/image'
import styles from './style.module.scss'
import Link from 'next/link';

interface PostContainerProps{
    postText: string;
    image_url: string;
    postTitle: string;
    uid: string;
}

export function PostContainer({postText, image_url, postTitle, uid}: PostContainerProps){


    function textLimit(text: string, maxLength: number){ // Limitar caracteres e adicionar ...
 
        if( text.length <= maxLength){
            return text
        }
        return text.substring(0, maxLength) + '...' // Pegue do 0 ao maxLength e adicione ...
    }
    return(
        <div className={styles.postContainer}>
                    <Link href={`posts/${uid}`} className={styles.divImage}>
                        <Image className={styles.img} src={`${image_url}`} height={150} width={200} alt=''/>
                    </Link>
                <div className={styles.divText}>
                    <Link href={`posts/${uid}`} className={styles.linkTitle}>
                        {textLimit(`${postTitle}`, 60)}
                    </Link>
                    <Link href={`posts/${uid}`} className={styles.linkText}>
                        {textLimit(`${postText}`, 160)}
                    </Link>
                </div>
            </div>
    )
}