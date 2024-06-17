import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import '../../css/Main/ViewScore.css';
import axios from "axios";

export default function ViewScore() {
  const navigate = useNavigate();
  const [personal, setPersonal] = useState(null);
  const [award, setAward] = useState(null);
  const [penalties, setPenalties] = useState(null);
  const userId = 1;

  const hanldeScore = () => {
    navigate('/score');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        //promise.all을 사용하게 되면 동시에 실행되어 값이 들어오는 네트워크 요청을 최적화 시킴
        const [totalResponse, awardResponse, penaltiesResponse] = await Promise.all([
          axios.get('http://3.36.91.138:80'),
          axios.get('http://3.36.91.138:80'),
          axios.get('http://3.36.91.138:80')
        ]);

        setPersonal(totalResponse.data);
        setAward(awardResponse.data[awardResponse.data.length - 1]);
        setPenalties(penaltiesResponse.data[penaltiesResponse.data.length - 1]);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="personalScore" onClick={hanldeScore}>
      <p className="score">Total: {personal}</p>

      <div className="WrapgoodScore">
        <p className="goodScoreTitle">상점</p>
        {award ? (
          <>
            <p className="goodScoreContent">{award.content}</p>
            <p className="goodScore">{award.score}점</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="WrapbadScore">
        <p className="badScoreTitle">벌점</p>
        {penalties ? (
          <>
            <p className="badScoreContent">{penalties.content}</p>
            <p className="badScore">{penalties.score}점</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
