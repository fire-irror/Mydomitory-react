import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backBtn from '../../assets/backBtn.svg'
import styles from '../../css/board/boardDetail.module.css'

export default function BoardDetail() {
  const [post, setPost] = useState(null);
  const nav = useNavigate();
  const handleBackBtn = () => {
    nav(-1)
  }

  // URL에서 게시물의 id 가져오기
  const { id } = useParams();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/board/${id}`);
      setPost(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <img src={backBtn} className={styles.backBtn} onClick={handleBackBtn} />
      <div className={styles.wrapContent}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
