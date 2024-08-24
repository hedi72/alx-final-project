import React, { useContext } from "react";
import Petti from './login'

import { useState } from "react";

import { AuthProvider } from "../../context/UserContext";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

import { useNavigate } from 'react-router-dom';

import serviceId from "../../context/CurrientUserContext";





export default function App({user}) {
  console.log('====================================');
  console.log("userProps",user);
  console.log('====================================');
  const { user2, update_serv } = useContext(serviceId);
  console.log("grondUser22:",user2);
 
  console.log("grond", user.id);
  const [basicModal, setBasicModal] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () =>{
    update_serv(user.id)
    
    console.log("user_id", user.id);
    if (user.user) {
      if (user.id === 1) {
      console.log("good");
      const x = "construction"
      navigate(`/${x}`); 
      
    }else if (user.id === 2) {
      const x = "plumbing"
      navigate(`/${x}`); 
      
    }else{
      const x = "electricity"
      navigate(`/${x}`); 

    }

     

       
    }

    
    
    setBasicModal(!basicModal);
    

  } 

  
 

  return (
    <>
      <MDBBtn style={{ backgroundColor: '#be0101' }} onClick={toggleOpen}>See more...</MDBBtn>
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
