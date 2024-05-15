import React from "react";
import Nav from "../components/common/Nav";
import LaundryHeader from "../components/Laundry/LaundryHeader";
import Reservation from '../components/Reservation/Reservation'


export default function ReservationPage(){
  return(
    <div>
      <LaundryHeader/>
      <Reservation/>
      <Nav/>
    </div>
  )
}