import { toast } from "react-toastify";
import { TailSpin } from 'react-loading-icons'; // Correct import statement
import { useState } from "react";

function WebsiteCard({ link, onDelete }) {
    const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay
  setTimeout(() => {
    setIsLoading(false);
  }, 300000);


  const onDeleteLink = async (id) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      try {
        await onDelete(id);
        toast("Link Removed Successfully", {
          type: "error",
          autoClose: 2000,
        });
      } catch (error) {
        console.error("Error deleting link:", error);
        toast("Error deleting link", {
          type: "error",
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <div className="card mb-3 card-website" style={{minHeight:'220px'}}>
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
            <i className="material-icons">Annuler</i>
          </button>
        </div>
        
        
        <a href='#' target="_blank" rel="noopener noreferrer">
                  {link.date}

        </a>
        
        
        <p style={{float:'right', color:'green', fontSize:'15px', right: '10px'}}>Reservation en cours... {isLoading ? (link.status === 'pending' &&  <TailSpin stroke="green"/>) : null}</p>  

        </div>
    </div>
  );
}

export default WebsiteCard;
