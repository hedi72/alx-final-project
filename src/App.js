import styled from "styled-components";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import { Private } from "./pages/private";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "./routes/protectedRoute";
import { auth } from "./firebase/firebase.config";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Service/Services";
import Construction from "./pages/construction";
import Plumbing from "./pages/plumbing";
import Electricity from "./pages/electricity";
import AdminDashboard from "./pages/adminDashboard";

import { UserProvider } from "./context/CurrientUserContext";
import AllUser from "./components/User/AddUser";
import Tosti from "./components/notification/Tosti";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  // Surveille l'état d'authentification de l'utilisateur
  useEffect(() => {
    const unsubscriv = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(user);
      setIsFetching(false);
    });
    return () => unsubscriv();
  }, []);
  console.log("appp", user);

  return (
    <Banner>
      <Tosti />

      <AllUser />
      <div>
        <Header user={user} />
      </div>

      <>
        <Routes>
          <Route
            path="/"
            element={
              <UserProvider>
                <Home user={user} />
              </UserProvider>
            }
          />

          <Route
            path="/private"
            element={
              <ProtectedRoute user={user}>
                <Private user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Services"
            element={
              <ProtectedRoute user={user}>
                <UserProvider>
                  <Services user={user} />
                </UserProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/construction"
            element={
              <ProtectedRoute user={user}>
                <UserProvider>
                  <Construction user={user} />
                </UserProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/plumbing"
            element={
              <ProtectedRoute user={user}>
                <UserProvider>
                  <Plumbing user={user} />
                </UserProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/electricity"
            element={
              <ProtectedRoute user={user}>
                <UserProvider>
                  <Electricity user={user} />
                </UserProvider>
              </ProtectedRoute>
            }
          />

          <Route
            path="/dash"
            element={
              <ProtectedRoute user={user}>
                <UserProvider>
                  <AdminDashboard user={user} />
                </UserProvider>
              </ProtectedRoute>
            }
          />
        </Routes>
      </>
      <LightColor2>
        <Footer />
      </LightColor2>
    </Banner>
  );
}
const LightColor2 = styled.div`
  background: #aaaaaa;
  border-radius: 100px;
`;
const Banner = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;
export default App;
