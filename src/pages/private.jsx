// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";
import GetList from "../components/reservation/Cards";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import FirebaseAdmin from "../components/User/GetAllUser";




export const Private = ({user}) => {
   
    return(
        <Container >
            <Slide direction="down">
        <h4 >
        {user && user.email === "admin@gmail.com" ? (
                   <>Dashboard <span className="green">Admin</span></>
                ):<>Hello <span className="green">{user.displayName}</span></>} 
        
        </h4>
        {user && user.email === "admin@gmail.com" ? (
                   <h1>Here is lists of all reservation:</h1>
                ):<h1>Here is your reservation:</h1>} 
        
            </Slide>
             <Slide direction="up">
             {user && user.email === "admin@gmail.com" && (
                     <FirebaseAdmin />
                )} 
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
