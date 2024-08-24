import React from "react";

import styled from "styled-components";
import Card from "./MyCard";
import { Slide } from "react-awesome-reveal";

import Carousell from "../carousell/Carousell";


const cards = (props) => {


  return (
    <Container id="service" style={{height: "100%"}}>
      <Slide direction="down">
        <h4>
          Our <span className="green">Services</span>
        </h4>
        <h1>Trust us</h1>
      </Slide>

      
      
      <Cards>
        {/* <Slide direction="left" > */}
            <div >
            <Card style={{ borderRadius:'50px'}}
            user = {props.user}
            title={props.title}
            disc={props.desc}
              />


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
