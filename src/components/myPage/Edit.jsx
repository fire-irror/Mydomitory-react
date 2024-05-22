import styles from '../../css/myPage/edit.module.css'
import profile from '../../assets/mypage.svg'
import React, { useState, useRef } from "react";
import EditHeader from './EditHeader';
import editBtn from '../../assets/editBtn.svg'

export default function Edit() {
  const [imageURL, setImageURL] = useState(null);
  const fileInputRef = useRef(null);

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
              <img src={profile} className={styles.profileImg} />
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
        <input className={styles.emailInput}/>
        <p className={styles.name}>이름</p>
        <input className={styles.nameInput}/>
        <p className={styles.roomNum}>호실</p>
        <input className={styles.roomInput}/>
        <p className={styles.perInfo}>내 정보</p>
        <input className={styles.infoInput}/>
      </div>
    </div>
  );
}
