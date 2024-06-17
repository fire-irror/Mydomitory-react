// Board.jsx
import React, { useEffect, useState } from "react";
import styles from '../../css/board/board.module.css'
import BoarderHeader from "./BoarderHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Board() {
  const nav = useNavigate();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get('http://3.36.91.138:80');
      setPosts(response.data);
      setFilteredPosts(response.data); // 초기에는 모든 게시글을 보여줍니다.
    } catch (e) {
      console.error(e);
    }
  };

  const handleBtn = () => {
    nav('/post');
  };

  const handleFilterChange = (filter) => {
    if (filter === '전체' || filter === 'HOT') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.type === filter);
      setFilteredPosts(filtered);
    }
  };

  const handlePostClick = (postId) => {
    nav(`/board/${postId}`); // 게시글 클릭 시 상세 페이지로 이동
  };

  return (
    <div className={styles.container}>
      <BoarderHeader onFilterChange={handleFilterChange} />
      {filteredPosts.map(post => (
        <div key={post.id} className={styles.wrapContent} onClick={() => handlePostClick(post.id)}>
          <hr />
          <p className={`${styles.Post} ${post.type === '공지' ? styles.notice : styles.normal}`}>{post.type}</p>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.content1}>{post.content}</p>
        </div>
      ))}
      <hr />
      <div>
        <button className={styles.btn} onClick={handleBtn}>+글쓰기</button>
      </div>
    </div>
  );
}