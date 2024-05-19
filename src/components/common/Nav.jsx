import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { BsChatText } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { useLocation, Link } from 'react-router-dom';
import '../../css/common/Nav.css';

export default function Nav() {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState(getActiveIcon(location.pathname));

  function getActiveIcon(pathname) {
    if (pathname.includes('/main')) return 'main';
    if (pathname.includes('/laundry')) return 'laundry';
    if (pathname.includes('/score')) return 'score';
    if (pathname.includes('/board')) return 'board';
    if (pathname.includes('/mypage')) return 'mypage';
    return null;
  }

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className='Nav_bar'>
      <Link to="/main">
        <AiOutlineHome
          size='25'
          color={activeIcon === 'main' ? '#F5CA00' : '#000'}
          onClick={() => handleIconClick('main')}
        />
      </Link>
      <Link to="/laundry">
        <MdOutlineLocalLaundryService
          size='28'
          color={activeIcon === 'laundry' ? '#F5CA00' : '#000'}
          onClick={() => handleIconClick('laundry')}
        />
      </Link>
      <Link to="/score">
        <GoChecklist
          size='25'
          color={activeIcon === 'score' ? '#F5CA00' : '#000'}
          onClick={() => handleIconClick('score')}
        />
      </Link>
      <Link to="/board">
        <BsChatText
          size='25'
          color={activeIcon === 'board' ? '#F5CA00' : '#000'}
          onClick={() => handleIconClick('board')}
        />
      </Link>
      <Link to="/mypage">
        <BsPerson
          size='25'
          color={activeIcon === 'mypage' ? '#F5CA00' : '#000'}
          onClick={() => handleIconClick('mypage')}
        />
      </Link>
    </div>
  );
}
