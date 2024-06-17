import styles from '../../css/myPage/edit.module.css'
import Profile from '../../assets/mypage.svg'
import React, { useState, useRef, useEffect } from "react";
import EditHeader from './EditHeader';
import editBtn from '../../assets/editBtn.svg'
import axios from 'axios';

export default function Edit() {
  const [imageURL, setImageURL] = useState(null);
  const fileInputRef = useRef(null);
  const [user, setUser] = useState('')
  const userId = 1

  useEffect(() => {
    axios.get(`http://3.36.91.138:80/user/${userId}`).then(response => {
      setUser(response.data[0])
    })
      .catch(e => {
        console.error(e)
      })
  })

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <EditHeader />
      <div className={styles.profile}>
        <div className={styles.profileImageContainer}>
          {imageURL ? (
            <img src={imageURL} alt="Profile" className={styles.profileImage} />
          ) : (
            <button onClick={handleUploadButtonClick} className={styles.uploadBtn}>
              <img src={Profile} className={styles.profileImg} />
            </button>
          )}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />
        </div>
        <img src={editBtn} className={styles.editBtn} onClick={handleUploadButtonClick} />
      </div>

      <div className={styles.wrapContent}>

        <p className={styles.email}>이메일</p>
        <p className={styles.emailP}>{user.email}</p>

        <p className={styles.name}>이름</p>
        <input className={styles.nameInput}
          placeholder={user.name}
        />

        <p className={styles.roomNum}>호실</p>
        <input className={styles.roomInput}
          placeholder={user.room_num
          } />

        <p className={styles.perInfo}>내 정보</p>
        <input className={styles.infoInput} />
      </div>
      <div className={styles.wrapBtn}>
        <button className={styles.doneBtn}>수정 완료</button>
      </div>
    </div>
  );
}
