import React, { useEffect, useState } from "react";
import styles from '../../css/board/board.module.css';
import BoarderHeader from "./BoarderHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "react-js-pagination";

export default function Board() {
  const nav = useNavigate();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get('http://3.36.91.138:80/board');
      const sortedPosts = response.data.sort((a, b) => b.id - a.id); // id 값을 역순으로 정렬
      const formattedPosts = sortedPosts.map(post => ({
        ...post,
        previewContent: post.content.slice(0, 27) + (post.content.length > 27 ? '...' : '') // 처음 27글자만 가져오기
      }));
      setPosts(formattedPosts);
      setFilteredPosts(formattedPosts); // 초기에는 모든 게시글을 보여줍니다.
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
      setCurrentPage(1); // 필터가 변경되면 첫 페이지로 리셋
    }
  };

  const handlePostClick = (postId) => {
    nav(`/board/${postId}`); // 게시글 클릭 시 상세 페이지로 이동
  };

  // 현재 페이지에 해당하는 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <BoarderHeader onFilterChange={handleFilterChange} />
      {currentPosts.map(post => (
        <div key={post.id} className={styles.wrapContent} onClick={() => handlePostClick(post.id)}>
          <hr />
          <p className={`${styles.Post} ${post.type === '공지' ? styles.notice : styles.normal}`}>{post.type}</p>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.content1}>{post.previewContent}</p> {/* 수정된 부분 */}
        </div>
      ))}
      <hr />
      <div>
        <button className={styles.btn} onClick={handleBtn}>+글쓰기</button>
      </div>
      <div className={styles.pagination}>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={filteredPosts.length}
          pageRangeDisplayed={7}
          onChange={handlePageChange}
          itemClass={styles.pageItem}
          activeClass={styles.activePage}
        />
      </div>
    </div>
  );
}
