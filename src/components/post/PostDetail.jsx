import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../css/Post/postDetail.module.css';

export default function PostDetail() {
  const [post, setPost] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost:8080/board').then(response=>{
      setPost(response.data[0])
    })
  })


  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.type}>{post.type}</p>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
}
