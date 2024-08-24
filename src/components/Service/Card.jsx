import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Grond from "../Login/loginHeader";




export default function Card(props) {
  console.log("cardyyyyy:",props);
  
  return (
    <div>
      {/* <Link to ='/info'  style={{ textDecoration: 'none', color:'black' }} > */}
    <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src={props.src} fluid alt='...' style={{ width: '100%' , maxHeight: '240px'}} />
            <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
        </MDBRipple>
        <MDBCardBody>
            <MDBCardTitle>{props.title}</MDBCardTitle>
            <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            {/* <MDBBtn href='#' style={{ backgroundColor: '#be0101' }} >Button</MDBBtn> */}
            <Grond user={props}  />
            <div style={{position: 'absolute'}}>
            
            </div>
        </MDBCardBody>
        
    </MDBCard>
    {/* </Link> */}
   
    
    </div>
  );
}