import React from "react"
import { useNavigate } from "react-router"
import { useState, useEffect } from "react"
import '../../css/Main/ViewScore.css'
import axios from "axios"

export default function ViewScore() {
  const navigate = useNavigate()
  const [personal, setPersonal] = useState(null)
  const [award, setAward] = useState(null)
  const [penalties, setPenalties] = useState(null)

  const hanldeScore = () => {
    navigate('/score')
  }
  const userId = 1;

  //사용자 상벌점 총점을 가져오는 get
  useEffect(() => {
    axios.get(`http://localhost:8080/personal/total/${userId}`).then(response => {
      setPersonal(response.data)
    })
      .catch(e => {
        console.error(e)
      })
  })

  //사용자의 상점을 가져오는 get
  useEffect(() => {
    axios.get(`http://localhost:8080/personal/award/${userId}`).then(response => {
      const data = response.data
      setAward(data[data.length - 1])
    })
      .catch(e => {
        console.error(e)
      })
  })

  //사용자의 벌점을 가져오는 get
  useEffect(() => {
    axios.get(`http://localhost:8080/personal/penalties/${userId}`).then(response => {
      const data = response.data
      setPenalties(data[data.length - 1])
    })
      .catch(e => {
        console.error(e)
      })
  })

  return (
    <div className="personalScore" onClick={hanldeScore}>
      <p className="score">Total :  {personal}</p>

      <div className="WrapgoodScore">
        <p className="goodScoreTitle">상점</p>
        {award ? (
          <>
            <p className="goodScoreContent">{award.content}</p>
            <p className="goodScore">{award.score}점</p>
          </>
        ) : (
          <p>loading</p>
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
          <p>Loading</p>
        )}

      </div>
    </div>
  )
}