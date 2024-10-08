import { toast } from "react-toastify";
import { TailSpin } from 'react-loading-icons'; // Correct import statement
import { useState } from "react";

function Card({ link, onDelete }) {

    const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay
  setTimeout(() => {
    setIsLoading(false);
  }, 300000);


  const onDeleteLink = async (id) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      try {
        await onDelete(id);
        toast("Reservation Removed Successfully", {
          type: "error",
          autoClose: 2000,
        });
      } catch (error) {
        console.error("Error deleting Reservation:", error);
        toast("Error deleting Reservation", {
          type: "error",
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <div className="card mb-3 card-website" style={{minHeight:'180px'}}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{link.theme} </h4>
    
          <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteLink(link.id);
            }}
          >
            <i className="material-icons">Cancel</i>
          </button>

          
        </div>
        
        
        <a href='#' target="_blank" rel="noopener noreferrer">
                  {link.date}

        </a>
        
        
        <p style={{ color:'green', fontSize:'15px', right: '10px', top:'10px'}}>
          {link.status ==="pending"?("Reservation in progress..."):("Validate reservation")} {isLoading ? (link.status === 'pending' &&  <TailSpin stroke="green"/>) : null}
        </p>  
        
        </div>
        
    </div>
  );
}

export default Card;
