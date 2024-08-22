import React, { useContext } from "react";
import Petti from './petti2'

import { useState } from "react";

import { AuthProvider } from "../context/UserContext";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

import { useNavigate, useParams } from 'react-router-dom';

import UserContext2 from "../context/Newcontext";





export default function App({user}) {
  const [basicModal, setBasicModal] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () =>{
    
    
   
    // if (user.user) {
    //   if (user) {
    //   console.log("good");
    //   const x = "construction"
    //   navigate(`/${x}`); 
      
    // }

     

       
    // }

    
    
    setBasicModal(!basicModal);
    

  } 

  
 

  return (
    <>
      <MDBBtn style={{ backgroundColor: '#be0101' }} onClick={toggleOpen}>Login</MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                
                color="#be0101"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            
           
        {/* <Petti /> */}
        <AuthProvider>
        <Petti />
      </AuthProvider>
      
              
                
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
