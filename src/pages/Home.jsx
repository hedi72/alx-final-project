import React, { useContext } from "react";
import styled from "styled-components";
import Services from '../components/Service/Services'
import Projects from '../components/Projects/Projects'
import Clients from '../components/Clients/Clients'
import ProfComponent from '../components/Banner/Banner';
import { Navigate } from 'react-router-dom';
import CurrentUserConnect from "../context/CurrientUserContext";

function Home(props) {
  const { user2, update_serv } = useContext(CurrentUserConnect);
  console.log("contextUser", user2 ? user2.username : "Aucun utilisateur connecté");

  console.log("propsUser", props.user ? props.user : "Aucun utilisateur connecté");
  console.log(typeof typeof 1);

  if (props.user) {
    if (user2 && user2.username === 1) {
      return <Navigate to='/construction'></Navigate>
    } else if (user2 && user2.username === 2) {
      return <Navigate to='/plumbing'></Navigate>
    } else if (user2 && user2.username === 3) {
      return <Navigate to='/electricity'></Navigate>
    }
    return <Navigate to='/private'></Navigate>
  }

  return (
    <div  >
      <Banner >
        <ProfComponent />
      </Banner>
      <Services />
      <Projects />
      <Clients />
      
    </div>
  );
}

const Banner = styled.div`

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",

  background: linear-gradient(
    159deg,
    rgb(255, 255, 255) 0%,
    rgb(255, 255, 255) 100%
  );
  height: 80vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;
     
   


export default Home


