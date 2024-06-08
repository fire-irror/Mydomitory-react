import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BoardDetail() {
  const [post, setPost] = useState(null);

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
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
