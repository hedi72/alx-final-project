import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import  { Forms } from './Forms';

export default function App(props) {

  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center" }}>      
       <MDBBtn style={{backgroundColor:"red"}} onClick={toggleOpen}>Reserver</MDBBtn>
    </div>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle> {props.card.title}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody style={{width:'100%'}}>
                <Forms cardName= {props.card.title} user = {props.user}/>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}