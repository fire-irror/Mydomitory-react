import React from "react";
import PostHeader from "./PostHeader";
import styles from '../../css/Post/post.module.css'
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


export default function Post() {
  const nav = useNavigate()
  const [type, setType] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const userId = 1;

  const handlePostBtn = async () => {
    const posted = {
      userId: userId,
      title: title,
      content: content,
      type: type
    }
    try {
      const response = await axios.post('http://3.36.91.138:80/board', posted)
      if (response.status === 201) {
        nav('/board')
      }
    } catch (e) {
      console.error(e)
    }
  }
  const categories = [
    "선택",
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
          onChange={(e) => setTitle(e.target.value)}
        />

        <p className={styles.inputSelect}>카테고리</p>
        <select className={styles.select} value={type} onChange={(e) => setType(e.target.value)}>
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
          onChange={(e) => setContent(e.target.value)}
        />
        <button className={styles.btn} onClick={handlePostBtn}>게시하기</button>
      </div>
    </div>
  )
}