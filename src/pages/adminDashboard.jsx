import React from 'react'
import Cards from "../components/MyCard/Cards"
import FirebaseAdmin from "../components/fonction/GetAllUser";




function adminDash(props) {
 
  return (
    <div>
     
         <FirebaseAdmin />
      
    </div>
  )
}

export default adminDash
