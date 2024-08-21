import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

// import myImage from '../../../public/images/logoani.jpg';


const Header = ({user}) => {
    console.log("header:",user);
    const {id} = useParams();
    console.log("useParam:",useParams());
    const [bar, setBar] = useState(false);

    const handleSignOut = () => {
        signOut(auth)
        .then(()=>console.log("sign out"))
        .catch((error)=> console.log(error));
    }
  return (
    <Container bar={bar}  >

        <Link to ='/'  >
        <img src="/images/logohome.png" alt="Description" style={{ width: '277px' }} />
        </Link>
        <Nav bar={bar} onClick={() => setBar(!bar)}>
            <span><Link to ='/'  onClick={() => setBar(!bar)}>Home</Link></span>
            <span><Link to="/Services" onClick={() => setBar(!bar)} >Services</Link></span>
            {/* <span><a href="#project" onClick={() => setBar(!bar)}>Projects</a></span> */}
            <span><a href="#client" onClick={() => setBar(!bar)}>Testimonials</a></span>
            {/* <span><a href="#footer" onClick={() => setBar(!bar)}>Portfolio</a></span> */}
            <span><a href="#footer" onClick={() => setBar(!bar)}>{id}</a></span>
            {user && <span> <button className="btn btn-danger btn-sm " onClick={handleSignOut}>sign out</button></span>}
            



        </Nav>
        <div
        onClick={() => setBar(!bar)}
        className="bars">
            <div className="bar"></div>
        </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            color: white;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                color: white;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #be0101;
                    position: absolute;
                    
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`
const Nav = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: black;
        opacity: 0.9;
       
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        
        a{
            color: #171717;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
        @media(max-width:640px){
            a{
                color: white;

            }
        }
    }
`