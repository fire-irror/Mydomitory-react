import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backBtn from '../../assets/backBtn.svg'
import styles from '../../css/board/boardDetail.module.css'
import back from '../../assets/backBtn.svg'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function BoardDetail() {
  const [post, setPost] = useState(null);
  const nav = useNavigate();

  const handleBackBtn = () => {
    nav(-1)
  }

  // URL에서 게시물의 id 가져오기
  const { id } = useParams();

  const handlePrevBtn = () =>{

  }

  const handleNextBtn = () =>{
    
  }

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
      <div className={styles.wrapBtn}>
        <img src={backBtn} className={styles.backBtn} onClick={handleBackBtn} />
      </div>
      <div className={styles.wrapContent}>
        <p className={`${styles.Post} ${post.type === '공지' ? styles.notice : styles.normal}`}>{post.type}</p>
        <p className={styles.title}>{post.title}</p>
        <div className={styles.contentContainer}>
          <p className={styles.content}>{post.content}</p>
        </div>
      </div>
      <div className={styles.navBtn}>
          <IoIosArrowBack className={styles.prev}/>
          <button className={styles.prevBtn} onClick={handlePrevBtn}>이전</button>
          <button className={styles.nextBtn} >다음</button>
          <IoIosArrowForward className={styles.next} onClick={handleNextBtn}/>
        </div>
    </div>
  );
}
