import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import GetList from "../components/reservation/GetList";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";



export const Private = ({user}) => {
    console.log('====================================');
    console.log(user.displayName);
    console.log('====================================');
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>console.log("sign out"))
        .catch((error)=> console.log(error));
    }
    return(
        <Container >
            <Slide direction="down">
        <h4 >
        Hello <span className="green">{user.displayName}</span>
        </h4>
        <h1>Here is your reservation:</h1>
      </Slide>
             <Slide direction="up">
             <Cards>
             <GetList user={user} />
             </Cards>
             </Slide>
            
        </Container>
    )

}

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
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  @media (max-width: 840px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));

  }
`;
