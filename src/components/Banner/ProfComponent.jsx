import React from "react";
import styled from "styled-components";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
// import { useParams } from 'react-router-dom';





const ProfComponent = () => {
  // const {id} = useParams();

  return (
    

    <div>
    <Container id="home">
      <Slide direction="left">
        <Texts>
          {/* <h4>
            Hello <span className="green">I'am</span>
          </h4> */}
          <h1 className="green">AnimaZone</h1>
          <h3>Le spécialiste de l’animation</h3>
         <p>
         Pour toutes vos soirées, publiques ou privées, AnimaZone c'est l'assurance d'une animation réussie.
          Nous sommes la solution professionnelle de qualité pour tous vos évènements.
          Nous mettons tout notre savoir-faire et notre savoir-être au services de vos évènements.

         </p>
          

          
          <button>Let's talk</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <AiFillFacebook />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>

        
      </Slide>
      
      <Slide direction="right">
        <Profile>

        <iframe style={{ borderRadius: '20px', height: '450px' }} src="https://www.youtube.com/embed/4cXXaoF86nE?si=3cAE7DyjOEn3z-gX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        {/* <iframe style={{ borderRadius: '20px', height: '450px' }}  src="https://www.youtube.com/embed/jou932U5Ckc?si=CfEhkiax7NZr0UCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <img
  src="/images/image13.jpg"
  style={{ borderRadius: '20px', height: '450px' }}
  alt="profile"
/> */}

        </Profile>
      </Slide>

      
    </Container>
    
    </div>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 50%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 0.8rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #be0101;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #f9b8b8);
    :hover {
      filter: drop-shadow(0px 10px 10px #ff9f9f);
    }
  }
`;
const Social = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #be0101;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
iframe {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #f9b8b8);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
