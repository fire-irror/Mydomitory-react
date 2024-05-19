import React from "react";
import styles from '../../css/board/board.module.css'
import BoarderHeader from "./BoarderHeader";
import { useNavigate } from "react-router-dom";


export default function Board(){
  const nav = useNavigate()

  const handleBtn = ()=>{
    nav('/post')  
  }
  return(
    <div className={styles.container}>
      <BoarderHeader/>

      <div>
        <button className={styles.btn} onClick={handleBtn}>+글쓰기</button>
      </div>
    </div>
  )
}