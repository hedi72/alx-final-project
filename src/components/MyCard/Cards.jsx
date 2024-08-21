import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./MyCard";
import { Slide } from "react-awesome-reveal";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import UserProfile from "../UserProfile";
import Carousell from "../Carousell";


const cards = (props) => {


  return (
    <Container id="service" style={{height: "100%"}}>
      <Slide direction="down">
        <h4>
          Nos <span className="green">themes</span>
        </h4>
        <h1>choisir votre theme</h1>
      </Slide>

      
      
      <Cards>
        {/* <Slide direction="left" > */}
            <div >
            <Card style={{ borderRadius:'50px'}}
            user = {props.user}
            st = "{{backgroundColor:'#00afff', borderRadius:'50px'}}"
            src='../../images/anniversaire3.png'
            id = {1}
              
            title={props.title}
            disc={props.desc}
              >

              </Card>

            </div>
         
        {/* </Slide> */}
        
        <Carousell imageSrc={props.imageSrc} />
         
          
      </Cards>
    </Container>
  );
};

export default cards;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
