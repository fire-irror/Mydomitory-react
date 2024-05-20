import styles from '../../css/myPage/edit.module.css'
import profile from '../../assets/mypage.svg'
import React, { useState, useRef } from "react";


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
      </div>
    </div>
  )
}