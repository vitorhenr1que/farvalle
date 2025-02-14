
import Image from 'next/image'
import styles from './style.module.scss'
import { PostContainer } from './PostContainer'
import { getClient } from '../../services/prismic'

export async function BlogMain(){
    

    
    const client = getClient()
    const response = await client.getAllByType('posts', { 
        pageSize: 1, 
        limit: 4, 
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc'
        } 
    })
    const posts = response
   
    return  (
        <div className={styles.container}>
            <h1>Últimas Novidades</h1>
            <div className={styles.postsContainer}>
            {posts && posts?.map((index, position) => {
                return(
                    <PostContainer key={index.id} 
                    postTitle={`${index.data.title}`} 
                    postText={`${index.data.content[0]?.type === 'paragraph' ? index.data.content[0]?.text : ''} ${index.data.content[1]?.type === 'paragraph' ? index.data.content[1]?.text : ''} ${index.data.content[2]?.type === 'paragraph' ? index.data.content[2]?.text : ''}`}
                    image_url={`${index.data.image.url}`}
                    uid={index.uid}
                    />
                )
            })}
   
            </div>
            
        </div>
    ) 
}