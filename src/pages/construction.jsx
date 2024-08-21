import React from 'react'
import ModalReservation from '../components/reservation/ModalReservation'
import Cards from "../components/MyCard/Cards"

function info(props) {
  const des = " Specialists in transforming and enhancing your spaces, we offer comprehensive construction and renovation services. Whether it's for new construction, modernization, or rehabilitation, we combine expertise and quality to bring your projects to life according to your expectations.    "
  let imageSrc = ["../../images/construc1.png","../../images/construc2.png",'../../images/construc3.png',"../../images/constru4.png"]
  return (
    <div>
        <Cards user={props.user} title={"Construction, rénovation"} desc={des} imageSrc={imageSrc}/>

        
      
    </div>
  )
}

export default info
