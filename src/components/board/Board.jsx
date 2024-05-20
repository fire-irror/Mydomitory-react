import React, { useEffect, useState } from "react";
import styles from '../../css/board/board.module.css'
import BoarderHeader from "./BoarderHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Board() {
  const nav = useNavigate()
  const [post, setPost] = useState([])

  useEffect(()=>{
    getPost()
  },[])

  const getPost = async () => {
    try {
      const response = await axios.get('http://localhost:8080/board')
      setPost(response.data)
    } catch (e) {
      console.error(e)
    }
  }
  const handleBtn = () => {
    nav('/post')
  }
  return (
    <div className={styles.container}>
      <BoarderHeader />
      {post.map(Post => (
        
        <div key={Post.id} className={styles.wrapContent}>
          <hr/>
          <p className={`${styles.Post} ${Post.type === '공지' ? styles.notice : styles.normal}`}>{Post.type}</p>
          <h3 className={styles.title}>{Post.title}</h3>
          <p className={styles.content1}>{Post.content}</p>
          
        </div>
      ))}
      <hr/>
      <div>
        <button className={styles.btn} onClick={handleBtn}>+글쓰기</button>
      </div>
    </div>
  )
}