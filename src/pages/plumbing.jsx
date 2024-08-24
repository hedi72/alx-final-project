import React from 'react'
import Cards from "../components/MyCard/Cards"

function info2(props) {

  const des = "We provide comprehensive plumbing services, from installing new systems to repairing and maintaining existing ones. Our team of skilled plumbers ensures quick, reliable work that meets standards, ensuring the proper functioning of your water and heating systems."
  let imageSrc = ["../../images/plomb1.png","../../images/plomb2.png",'../../images/plomb3.png',"../../images/plomb4.png"]

  return (
    <div>
        <Cards user={props.user} title={"Plumbing"} desc={des} imageSrc={imageSrc}/>
      
    </div>
  )
}

export default info2
