import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { savereservation, getreservation, updatereservation } from "../../firebase/api";
import { useParams, useNavigate } from "react-router-dom";
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';


const initialState = {
  tel: "",
  address: "",
  date: "",
  name : "",
  email : "",
  theme: "",
  status : "pending"
};

export const Forms = (props) => {

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

        <MDBBtn
          className="btn btn-primary btn-block"
          disabled={!reservation.tel || !reservation.address || !reservation.date }
        >
          Confirm
        </MDBBtn>
      </form>
    </div>
  );
};

export default Forms;
