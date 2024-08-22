import React from 'react'
import Cards from "../components/MyCard/Cards"
import FirebaseAdmin from "../components/fonction/GetAllUser";



function info3(props) {
  const des = "We deliver a full range of electrical services, from wiring and installation to maintenance and repairs. Our certified electricians ensure safe, efficient, and code-compliant solutions for residential and commercial properties, keeping your electrical systems running smoothly and reliably"
  let imageSrc = ["../../images/technicien1.png","../../images/technicien2.png",'../../images/technicien3.png',"../../images/technicien4.png"]

  return (
    <div>
         <Cards user={props.user} title={"Electricity"} desc={des} imageSrc={imageSrc}/>
       
      
    </div>
  )
}

export default info3
