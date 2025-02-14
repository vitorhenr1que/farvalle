
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import styles from './style.module.scss'
import { getClient } from "../../services/prismic"
import Image from "next/image"
import { PostsDocumentData, Simplify } from "../../../../prismicio-types"

interface ParamsProps {
    params: Promise<{id: string}>
}

type postType = Simplify<PostsDocumentData>




export default async function PostsDinamicos({params}: ParamsProps){
    
    const { id } = await params
    console.log(id)
    const client = getClient()
    const response = await client.getByUID('posts', id, {})
    const post = response.data
     console.log(post)
    return  (
        <>
        <div className={styles.container}>
          <main className={`${styles.postContainer} container`}>
        
        <h1 className={styles.title}>{post?.title}</h1>
        <PrismicRichText field={post?.content} components={
            {
                heading1: ({children}) => <p className={styles.headingOne}>{children}</p>,
                heading2: ({children}) => <p className={styles.headingTwo}>{children}</p>,
                heading3: ({children}) => <p className={styles.headingTree}>{children}</p>,
                paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
                image: ({node, key}) => {
               const img = <Image src={node.url} quality={100} className={styles.image} width={1000} height={500} alt={`${node.alt}` ? `${node.alt}` : ''}/>
               return (
                <div key={key} className={styles.imageBlock}>
                    { node.linkTo ? (
                    <PrismicLink field={node.linkTo}> {img} </PrismicLink>
                    ) : (
                        img
                    )
                }
                </div>
               )
            }
            }
    
        }/>
        </main>  
        </div>
        </>
        
    )
}

