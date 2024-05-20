import React, { useEffect, useState } from 'react';
import styles from '../../css/myPage/myPage.module.css'
import logo from '../../assets/Logo.svg'
import profile from '../../assets/mypage.svg'
import editBtn from '../../assets/editBtn.svg'
import { useNavigate } from 'react-router-dom';
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { MdOutlineHeadset } from "react-icons/md";
import { BsFillPersonXFill } from "react-icons/bs";
import axios from 'axios';


export default function MyPage() {
  const nav = useNavigate()
  const [userData, setUserData] = useState('')

  useEffect(() => {
    const userId = 1;
    axios.get(`http://localhost:8080/user/${userId}`).then(response => {
      setUserData(response.data[0])
    })
      .catch(e => {
        console.error(e)
      })
  },[])

  const handleEtitBtn = () => {
    nav('/edit')
  }




  return (
    <div className={styles.container}>
      <div className={styles.wrapContent}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <p className={styles.title}>My Domitory</p>
      </div>

      <div className={styles.profileImg}>
        <img src={profile} className={styles.img} />
        <img src={editBtn} className={styles.editBtn} onClick={handleEtitBtn} />
      </div>
      <div className={styles.profileInfo}>
        <p className={styles.name}>{userData.name}</p>
        <p className={styles.roomNum}>{userData.room_num}호</p>
      </div>

      <div className={styles.wrapBtn}>
        <button className={styles.roomInfo}>내 호실 정보</button>
        <button className={styles.score}>상벌점 보러가기</button>
      </div>

      <div className={styles.wrapInfo}>
        <BiMessageDetail/>
        <MdOutlineLocalLaundryService/>
        <IoSettingsOutline/>
        <HiOutlineQuestionMarkCircle/>
        <MdOutlineHeadset/>
        <BsFillPersonXFill/>
      </div>
    </div>
  );
}
