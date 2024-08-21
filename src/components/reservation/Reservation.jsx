import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { savereservation, getreservation, updatereservation } from "../../firebase/api";
import { useParams, useNavigate } from "react-router-dom";
import { MDBInput, MDBCheckbox, MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';


const initialState = {
  tel: "",
  address: "",
  date: "",
  name : "",
  email : "",
  theme: "",
  mascotte:[],
  status : "pending"
};

export const Reservation = (props) => {
  console.log('====================================');
  console.log("reservation cadName: ", props.cardName);
  console.log('====================================');
  const notify = () =>  toast.success(`Reservation success ${props.user.email}`, { autoClose: 2000 });


  const notify2 = () =>  toast.error('Invalid tel', { autoClose: 2000 });

  
  console.log("reservation", props.user);
  const [reservation, setReservation] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getLinkById = async (id) => {
      try {
        const doc = await getreservation(id);
        setReservation({ ...doc.data() });
      } catch (error) {
        console.error(error);
      }
    };

    if (params.id) {
      getLinkById(params.id);
    }
  }, [params.id]);

  const handleInputChange = ({ target: { name, value } }) =>
    setReservation({ ...reservation, [name]: value });

    const handleInputChange2 = ({ target: { name, checked } }) => { // Modifiez le destructuring pour obtenir la propriété 'checked'
      if (checked) {
        setReservation({ ...reservation, mascotte: [...reservation.mascotte, name] }); // Ajoutez la mascotte sélectionnée
      } else {
        setReservation({ ...reservation, mascotte: reservation.mascotte.filter(item => item !== name) }); // Supprimez la mascotte désélectionnée
      }
    };

  const validURL = (str) => /^\d{8}$/.test(str);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!props.user || !props.user.email) {
        console.error("User or email is undefined");
        toast.error("User not logged in or email not found");
        return;
    }

    reservation.name = props.user.displayName || "Anonymous";
    reservation.email = props.user.email;
    reservation.theme = props.cardName;

    if (!validURL(reservation.tel)) {
        notify2("Invalid tel", { type: "warning", autoClose: 1000 });
        return;
    }

    try {
        if (!params.id) {
            await savereservation(reservation);
            notify("Reservation success", { type: "success", autoClose: 1000 });
        } else {
            await updatereservation(params.id, reservation);
            toast("Updated", { type: "success" });
        }
        setReservation({ ...initialState, mascotte: [] });
        navigate("/");
    } catch (error) {
        console.error(error);
        toast("Error occurred", { type: "error" });
    }
};


  return (
    <div className='mb-3' style={{width:'100%'}}>
      <form onSubmit={handleSubmit}>
        <MDBInput
          type="text"
          className="form-control"
          value={reservation.tel}
          name="tel"
          onChange={handleInputChange}
          wrapperClass='mb-4'
          label='tel'
        />
        <MDBInput
          type="text"
          value={reservation.address}
          name="address"
          className="form-control mb-3"
          onChange={handleInputChange}
          id='form4Example2'
          wrapperClass='mb-4'
          label='votre address'
        />
        <MDBInput
          type="datetime-local"
          className="form-control mb-3"
          name="date"
          value={reservation.date}
          onChange={handleInputChange}
          id='form4Example3'
          wrapperClass='mb-4'
          label='date'
        />
      
   {(props.cardName === "Anniversaire")?<div className="option_anniversaire">
    <label style={{marginBottom:'20px'}} htmlFor="">Choisir votre preferer mascotte:</label>
        


        <MDBBtnGroup style={{backgroundColor:'transparent',boxShadow: 'none', display:'flex', justifyContent:'center'}}>
        
        <MDBCheckbox
          
        btn
          wrapperTag='span'
          name="mickey"
          id="inlineCheckbox1"
          className="mickey-checkbox"
          
          // Définissez une classe CSS pour la checkbox
          label='      '
          inline
          value="mickey"
          checked={reservation.mascotte.includes('mickey')}
          onChange={handleInputChange2}
        />
        
        <MDBCheckbox
          
        btn
          wrapperTag='span'
          name="mini"
          id="inlineCheckbox2"
          className="mini-checkbox"
          
          // Définissez une classe CSS pour la checkbox
          label='     '
          inline
          value="mickey"
          checked={reservation.mascotte.includes('mini')}
          onChange={handleInputChange2}
        />
        
        <MDBCheckbox
          
        btn
          wrapperTag='span'
          name="pluto"
          id="inlineCheckbox3"
          className="pluto-checkbox"
          
          // Définissez une classe CSS pour la checkbox
          label='     '
          inline
          value="pluto"
          checked={reservation.mascotte.includes('pluto')}
          onChange={handleInputChange2}
        />
        <MDBCheckbox
          
        btn
          wrapperTag='span'
          name="daisy"
          id="inlineCheckbox4"
          className="daisy-checkbox"
          
          // Définissez une classe CSS pour la checkbox
          label='     '
          inline
          value="daisy"
          checked={reservation.mascotte.includes('daisy')}
          onChange={handleInputChange2}
        />
        <MDBCheckbox
          
        btn
          wrapperTag='span'
          name="donald"
          id="inlineCheckbox5"
          className="donald-checkbox"
          
          // Définissez une classe CSS pour la checkbox
          label='     '
          inline
          value="donald"
          checked={reservation.mascotte.includes('donald')}
          onChange={handleInputChange2}
        />
                  
             
            </MDBBtnGroup>

    </div>: <div className="option_fete"></div> }

    
        

    <hr/>


        {/* <MDBCheckbox
          wrapperClass='d-flex justify-content-center mb-4'
          id='form4Example4'
          label='Send me a copy of this message'
          defaultChecked
        /> */}

        <MDBBtn
          className="btn btn-primary btn-block"
          disabled={!reservation.tel || !reservation.address || !reservation.date || !reservation.mascotte}
        >
          Confirm
        </MDBBtn>
      </form>
    </div>
  );
};

export default Reservation;
