import { toast } from "react-toastify";
import { TailSpin } from 'react-loading-icons';
import { useState, useEffect } from "react";

function WebsiteCard({ link, onDelete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondes de délai

    return () => clearTimeout(timer); // Nettoyage pour éviter les fuites de mémoire
  }, []);

  const onDeleteLink = async (id) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      try {
        await onDelete(id);
        toast("Link Removed Successfully", {
          type: "success",
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
    <div className="card mb-3 card-website" style={{ minHeight: '180px' }}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{link.theme}</h4>
          <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteLink(link.id);
            }}
          >
            <i className="material-icons">delete</i>
          </button>
        </div>

        <a href='#' target="_blank" rel="noopener noreferrer">
          {link.date}
        </a>

        <p className={`status-text ${link.status === "Pending" ? "pending" : "validated"}`}>
          {link.status === "Pending" ? "Reservation in progress..." : "Validate reservation"}
          {isLoading && link.status === 'Pending' && <TailSpin stroke="green" />}
        </p>
      </div>
    </div>
  );
}

export default WebsiteCard;
