import React from "react";
import PostHeader from "./PostHeader";
import styles from '../../css/Post/post.module.css'
import { useState } from "react";
import axios from "axios";


export default function Post() {
  const [userId, setUserId] = useState('')
  const [title,setTitle] = useState('')
  const [content, setContent] = useState('')

  const handlePostBtn = async() =>{
    const posted = {
      userId: userId,
      title: title,
      content: content
    }
    try{
      const response = await axios.post('http://localhost:8080/board',posted)
      if(response.status === 200){
        alert('게시되었습니다');
      }
    }catch(e){
      console.log(e)
    }
  }
  const categories = [
    "공지",
    "일반"
  ];

  return (
    <div className={styles.container}>
      <PostHeader />
      <div className={styles.content}>
        <p className={styles.inputTitle}>제목</p>
        <input
          placeholder="제목을 입력하세요"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.vaule)}
        />

        <p className={styles.inputSelect}>카테고리</p>
        <select className={styles.select}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <p className={styles.inputContent}>내용</p>
        <textarea 
        className={styles.textarea}
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e)=> setContent(e.target.value)}
        />
        <button className={styles.btn} onClick={handlePostBtn}>게시하기</button>
      </div>
    </div>
  )
}