import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';







    export default function App() {
        const {signIn} = useContext(AuthContext);
        const navigate = useNavigate();
        const {createUser, signInWithGoogle} = useContext(AuthContext);
    
        const handleSubmit = event =>{
            event.preventDefault();
            const form = event.target;
           
            


            if (basicActive === 'tab1') {
                const email = form.email.value;
                const password = form.password.value;
                console.log(email, password);
                signIn(email, password)
                .then(result =>{
                  const user = result.user;
                  console.log(user);
                  form.reset();
                  navigate('/');
                })
                .catch(error => {
                  console.error(error);
                })
            
                
            } else {
                const firstName = form.firstName.value;
                const lastName = form.lastName.value;
                const email = form.email.value;
                const password = form.password.value;
                console.log(firstName,lastName, email, password);
                createUser(email, password, firstName, lastName)
                .then(result =>{
                  const user = result.user;
                  console.log('registered user', user);
                })
                .catch(error =>{
                  console.error(error)
                })
                

                
            }

            
            
    
            
            
    
           
        }
        const handleGoogleSignIn = () =>{
            signInWithGoogle()
            .then(result =>{
              const user = result.user;
              console.log(user);
            })
            .catch(error => console.log(error))
          }
    
        // register
    
       
  const [basicActive, setBasicActive] = useState('tab1');
  console.log(basicActive);
const handleBasicClick = (value) => {
    if (value === basicActive) {
        return;
    }

    setBasicActive(value);
};

  return (
    <>
    <MDBTabs pills justify className='mb-3'>
        <MDBTabsItem>
            <MDBTabsLink onClick={() => {handleBasicClick('tab1');}} active={basicActive === 'tab1'} style={{backgroundColor: basicActive === 'tab1' ? '#be0101' : '', color:basicActive === 'tab1' ? 'white' : ''}}>
                Login
            </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'} style={{backgroundColor: basicActive === 'tab1' ? '' : '#be0101', color:basicActive === 'tab1' ? '' : 'white'}}>
                Register
            </MDBTabsLink>
        </MDBTabsItem>
    </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={basicActive === 'tab1'}> 
        <form className='login' onSubmit={handleSubmit } >
      <MDBInput className='mb-4' name='email' type='email' id='form2Example1' label='Email address' />
      <MDBInput className='mb-4' name='password' type='password' id='form2Example2' label='Password' />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox style={{backgroundColor:'#be0101', borderColor:'#be0101'}} id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!' style={{color:'#be0101'}}>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' name='Signin' className='mb-4' block style={{backgroundColor:'#be0101'}}>
      Sign in
        
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!' style={{color:'#be0101'}}>Register</a>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon style={{color:'black'}} fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon style={{color:'black'}} onClick={handleGoogleSignIn}  fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon style={{color:'black'}} fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon style={{color:'black'}} fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </MDBTabsPane>
        <MDBTabsPane open={basicActive === 'tab2'}> 
        <form className='register' onSubmit={handleSubmit }>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput name='firstName' id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput name='lastName' id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' name='email' type='email' id='form3Example3' label='Email address' />
      <MDBInput className='mb-4' name='password' type='password' id='form3Example4' label='Password' />

      <MDBCheckbox style={{backgroundColor:'#be0101', borderColor:'#be0101'}}
        wrapperClass='d-flex justify-content-center mb-4'
        id='form3Example5'
        label='Subscribe to our newsletter'
        defaultChecked
      />

      <MDBBtn type='submit' name='Signup' className='mb-4' block  style={{backgroundColor:'#be0101'}}>
        Sign up
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!' style={{color:'#be0101'}}>Register</a>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='facebook-f' style={{color:'black'}} />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='google' style={{color:'black'}} />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='twitter' style={{color:'black'}} />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='github' style={{color:'black'}} />
        </MDBBtn>
      </div>
    </form></MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}