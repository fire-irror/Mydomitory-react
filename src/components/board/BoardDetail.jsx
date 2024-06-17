import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import backBtn from '../../assets/backBtn.svg';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from '../../css/board/boardDetail.module.css';


export default function BoardDetail() {
  const [post, setPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPost();
  }, [id]); 

  const getPost = async () => {
    try {
      const response = await axios.get(`http://3.36.91.138:80/board/${id}`);
      setPost(response.data);
      fetchPreviousPost();
      fetchNextPost();
    } catch (e) {
      console.error(e);
    }
  };

  //이전글 가져오는 get
  const fetchPreviousPost = async () => {
    try {
      const response = await axios.get(`http://3.36.91.138:80/board/${id}/previous`);
      setPrevPost(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  //다음을 가져오는 get
  const fetchNextPost = async () => {
    try {
      const response = await axios.get(`http://3.36.91.138:80/board/${id}/next`);
      setNextPost(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  //이전 버튼 클릭시 화면이 넘어가도록
  const handlePrevBtn = () => {
    if (prevPost) {
      navigate(`/board/${prevPost.id}`);
    }
  };

  //다음 버튼 클릭시 화면이 넘어가도록
  const handleNextBtn = () => {
    if (nextPost) {
      navigate(`/board/${nextPost.id}`);
    }
  };

  //뒤로가기 버튼을 눌렀을 때는 바로 board화면으로 이동하게
  const handleBackBtn = () => {
    navigate('/board');
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateArray) => {
    const [year, month, day] = dateArray;
    return `${year}.${month}.${day}`;
  };

  const formattedDate = formatDate(post.createdAt);
  return (
    <div className={styles.container}>
      <div className={styles.wrapBtn}>
        <img src={backBtn} className={styles.backBtn} onClick={handleBackBtn} alt="Back Button" />
      </div>
      <div className={styles.wrapContent}>
        <p className={`${styles.Post} ${post.type === '공지' ? styles.notice : styles.normal}`}>{post.type}</p>
        <p className={styles.time}>{formattedDate}</p>
        <p className={styles.title}>{post.title}</p>
        <div className={styles.contentContainer}>
          <p className={styles.content}>{post.content}</p>
        </div>
      </div>
      <div className={styles.navBtn}>
        {prevPost && (
          <div className={styles.wrapPrevBtn}>
            <IoIosArrowBack className={styles.prev} onClick={handlePrevBtn} />
            <button className={styles.prevBtn} onClick={handlePrevBtn}>이전</button>
          </div>
        )}
        {nextPost && (
          <div className={styles.wrapNextBnt}>
            <button className={styles.nextBtn} onClick={handleNextBtn}>다음</button>
            <IoIosArrowForward className={styles.next} onClick={handleNextBtn} />
          </div>
        )}
      </div>
    </div>
  );
}
