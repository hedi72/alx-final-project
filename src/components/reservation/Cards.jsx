import React, { useEffect, useState } from "react";
import { getreservations } from "../../firebase/api";
import { deletereservation } from "../../firebase/api";
import CardList from "./Card";
import { toast } from "react-toastify";

const Cards = (props) => {
  const [reservations, setReservations] = useState([]);
  
  useEffect(() => {
    const getRevs = async () => {
      try {
        const querySnapshot = await getreservations();
        const docs = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setReservations(docs);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    getRevs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletereservation(id);
      // Update the reservations state after successful deletion
      setReservations(prevReservations =>
        prevReservations.filter(reservation => reservation.id !== id)
      );
    } catch (error) {
      console.error("Error deleting reservation:", error);
      toast("Error deleting reservation", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      
      {reservations.map((reservation) => (
        
        props.user?.email === reservation.email && (
            <div className="col-md-3" style={{width:'100%'}} key={reservation.id}>
          
            <CardList link={reservation} onDelete={handleDelete} />
         
      
        </div>
        )
        
      ))}
    </>
  );
};

export default Cards;
