import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
 
} from 'mdb-react-ui-kit';

import ModalReservation from '../reservation/ModalReservation'; 

export default function App(props) {
    console.log(props.style);
    console.log("myCard2",props);
    
    

  return (
    <MDBCard style={props.style} >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      </div>
      <MDBCardBody>
        <MDBCardTitle><h4 style={{color:'black', fontWeight:'font-weight: 800',textAlign:'center', fontFamily: "'Nunito', sans-serif"}}>{props.title}</h4></MDBCardTitle>
        <MDBCardText>
            <p style={{color:'black', fontFamily: "'Nunito', sans-serif"}}>
            {props.disc}
                   </p>
        </MDBCardText>
        <ModalReservation card={props}  user={props.user}  />
      </MDBCardBody>
    </MDBCard>
  );
}


