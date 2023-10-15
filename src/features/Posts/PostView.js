import React, { useEffect } from 'react'

import   './postView.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
 const {post,isLoading, error } = useSelector((state) => (state.posts))

 const dispatch = useDispatch();
 useEffect(()=>{
         dispatch(fetchPosts())
 }, [])

 console.log(post)
  return (
    <div>
      { isLoading &&  <h1>Loading Data .....</h1>}
      { error &&  <h1>{error}</h1>}
      <section>
        {post.map((data)=> {
            const {title, body, id} =data
            return <article key = {id}>
                <h5>{title}</h5>
                <p>{body}</p>
            </article>
        })}
      </section>

    </div>
  )
}

export default PostView;