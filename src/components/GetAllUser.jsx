import { useEffect, useState } from "react";
import { auth, db } from '../firebase/firebase.config';
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function App() {
  const [reservations, setReservations] = useState([]);
  console.log("show all reservations:", reservations);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const reservationsCollection = collection(db, 'reservations');
        const snapshot = await getDocs(reservationsCollection);
        const reservationData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReservations(reservationData);
      } else {
        setReservations([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleEditClick = async (reservationId, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Pending' : 'Active';
    setReservations(prevReservations =>
      prevReservations.map(reservation =>
        reservation.id === reservationId
          ? { ...reservation, status: newStatus }
          : reservation
      )
    );
    const reservationRef = doc(db, 'reservations', reservationId);
    await updateDoc(reservationRef, { status: newStatus });
  };

  const handleDeleteClick = async (reservationId) => {
    // Supprime la réservation de Firestore
    await deleteDoc(doc(db, 'reservations', reservationId));

    // Met à jour l'état local pour retirer la réservation
    setReservations(prevReservations =>
      prevReservations.filter(reservation => reservation.id !== reservationId)
    );
  };

  return (
    <div>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Adress</th>
            <th scope='col'>Tel</th>
            <th scope='col'>Status</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{reservation.name}</p>
                    <p className='text-muted mb-0'>{reservation.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{reservation.address}</p>
                <p className='text-muted mb-0'>{reservation.theme}</p>
                <p className='text-muted mb-0'>{reservation.department}</p>
              </td>
              <td>{reservation.tel}</td>
              <td>
                <MDBBadge color={reservation.status === 'Active' ? 'success' : 'warning'} pill>
                  {reservation.status}
                </MDBBadge>
              </td>
              <td>
                <MDBBtn 
                  color='link' 
                  rounded 
                  size='sm' 
                  onClick={() => handleEditClick(reservation.id, reservation.status)}
                >
                  Edit
                </MDBBtn>
                <MDBBtn 
                  color='danger' 
                  rounded 
                  size='sm' 
                  onClick={() => handleDeleteClick(reservation.id)}
                >
                  Delete
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      
    </div>
  );
}

export default App;
