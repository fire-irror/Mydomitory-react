import React, { useEffect, useState } from 'react';
import styles from '../../css/myPage/myPage.module.css';
import logo from '../../assets/Logo.svg';
import profile from '../../assets/mypage.svg';
import editBtn from '../../assets/editBtn.svg';
import { useNavigate } from 'react-router-dom';
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineLocalLaundryService, MdOutlineHeadset } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { BsFillPersonXFill } from "react-icons/bs";
import axios from 'axios';

export default function MyPage() {
  const nav = useNavigate();
  const [userData, setUserData] = useState('');
  const userId = 1

  useEffect(() => {
    axios.get(`http://3.36.91.138:80/user/${userId}`).then(response => {
      setUserData(response.data[0]);
    })
      .catch(e => {
        console.error(e);
      });
  }, []);

  const handleEtitBtn = () => {
    nav('/edit');
  };

  const handleIconClick = (path) => {
    nav(path);
  };

  const icons = [
    { icon: <BiMessageDetail size={30} />, text: '게시판', path: '/board' },
    { icon: <MdOutlineLocalLaundryService size={30} />, text: '세탁', path: '/laundry' },
    { icon: <IoSettingsOutline size={30} />, text: '설정' },
    { icon: <HiOutlineQuestionMarkCircle size={30} />, text: '도움말' },
    { icon: <MdOutlineHeadset size={30} />, text: '고객센터'},
    { icon: <BsFillPersonXFill size={30} />, text: '로그아웃'},
  ];

  const handleScore = () => {
    nav('/score');
  };

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
        <button className={styles.score} onClick={handleScore}>상벌점 보러가기</button>
      </div>

      <div className={styles.wrapInfo}>
        <div className={styles.wrapIcon}>
          {icons.map((item, index) => (
            <div
              key={index}
              className={styles.iconContainer}
              onClick={() => handleIconClick(item.path)}
            >
              {item.icon}
              <p className={styles.iconText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
