import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";




const Services = ({user}) => {
  console.log("services", user);

 

  return (
    <Container id="service" >
      <Slide direction="down">
        <h4>
          Our <span className="green">services</span>
        </h4>
        {/* <h1>Ce que je fais</h1> */}
      </Slide>

      
      
      <Cards>
        {/* <Slide direction="left"> */}
          <Card
            id = {1}
            user = {user}
            title={"Construction, renovation,"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
            src = {'/images/renov.png'}
            
          />
        {/* </Slide> */}
        {/* <Slide direction="up"> */}
          <Card
            id = {2}
            user = {user}
            title={"Plumbing"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                src = {'/images/plomb.png'}
          />
        {/* </Slide> */}
        {/* <Slide direction="right"> */}
          <Card
            id = {3}
            user = {user}
            title={"Electricity"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                src = {'/images/elect.png'}
          />
         
          
          
        {/* </Slide> */}
      </Cards>
    </Container>
  );
};

export default Services;

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
