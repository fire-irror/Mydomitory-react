import React from "react";
import styles from '../../css/Laundry/Laundry.module.css'
import { useNavigate } from "react-router-dom";


export default function LaundryBtn(){
  const navigate = useNavigate()
  const handleresLaundry = () =>{
    navigate('/reservation')
  }

  return(
    <div>
      <button className={styles.resLaundry} onClick={handleresLaundry}>세탁 신청하기</button>
    </div>
  )
}