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
  const { user2, update_serv } = useContext(UserContext2);
  console.log("grondUser2:",user2);
  const { monParametre } = useParams();
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
      <MDBBtn style={{ backgroundColor: '#be0101' }} onClick={toggleOpen}>Voir plus...</MDBBtn>
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
