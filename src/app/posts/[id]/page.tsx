'use client'
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import styles from './style.module.scss'
import { useRouter } from 'next/router'
import { getClient } from "@/app/services/prismic"
import Image from "next/image"
import { PostsDocumentData, Simplify } from "../../../../prismicio-types"
import { use, useEffect, useState } from "react"
import { Loading } from "@/app/components/Loading"
import { LoadingDiv } from "@/app/components/LoadingDiv"

interface ParamsProps {
    params: Promise<{id: string}>
}

type postType = Simplify<PostsDocumentData>
export default function PostsDinamicos({params}: ParamsProps){
    
    const [post, setPost] = useState<Simplify<PostsDocumentData>>()
    const [loading, setLoading] = useState(false)
    const {id} = use(params)
     useEffect(() => {
        async function getPost(){
            try{
                setLoading(true)
                const client = getClient()
                const response = await client.getByUID('posts', id, {})
                setPost(response.data)
                setLoading(false)
            }catch(e){
                console.log(e)
                setLoading(false)
            }
        }
        getPost()
     },[])
    return !loading ? (
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
        
    ) : (<LoadingDiv/>)
}