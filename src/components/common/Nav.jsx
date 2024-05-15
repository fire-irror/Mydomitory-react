import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { BsChatText } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import '../../css/common/Nav.css'

export default function Nav() {
  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();


  const handleMypageClick = () => {
    navigate('/mypage');
  }

  const handelHomeButtonClick = () => {
    navigate('/main')
  }

  const handleLaundryClick = () => {
    navigate('/laundry')
  }

  const handleChatClick = () => {
    setActiveIcon('chat');
  }

  return (
    <div className='Nav_bar'>
      <AiOutlineHome size='25' color={activeIcon === 'main' ? '#F5CA00' : '#000'} onClick={handelHomeButtonClick} />
      <MdOutlineLocalLaundryService size='28' color={activeIcon === 'laundry' ? '#F5CA00' : '#000'} onClick={handleLaundryClick} />
      <GoChecklist size='25' color={activeIcon === 'chat' ? '#F5CA00' : '#000'} onClick={handleChatClick} />
      <BsChatText size='25' color={activeIcon === 'post' ? '#F5CA00' : '#000'} onClick={handleChatClick} />
      <BsPerson size='25' color={activeIcon === 'mypage' ? '#F5CA00' : '#000'} onClick={handleMypageClick} />
    </div>
  );
}