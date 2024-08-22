import React, { useContext } from "react";
import styled from "styled-components";

import Services from '../components/Service/Services'
import Projects from '../components/Projects/Projects'
import Clients from '../components/Clients/Clients'
import ProfComponent from '../components/Banner/Banner';
import { Navigate } from 'react-router-dom';


import UserContext2 from "../context/Newcontext";

function Home(props) {
  const { user2, update_serv } = useContext(UserContext2);
  console.log("home_serv", user2 ? user2.username : "Aucun utilisateur connecté");

  console.log("home_id", props.user ? props.user : "Aucun utilisateur connecté");
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
     
   


export default Home

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
