import styled from "styled-components";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import { Private } from "./pages/private";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "./routes/protectedRoute2";
import { auth } from "./firebase/firebase.config";
import Header from "./components/Banner/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Service/Services";
import FirebaseAdmin from "./components/GetAllUser";
import Construction from "./pages/construction";
import Plumbing from "./pages/plumbing";
import Electricity from "./pages/electricity";
import AdminDashboard from "./pages/adminDashboard";

import { UserProvider } from "./context/Newcontext";

import AllUser from "./components/AddUser";
import Tosti from "./components/Tosti";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
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
  // background-image: url("/images/footer_bg.png");
  background: #aaaaaa;
`;
export default App;

const Banner = styled.div`
  // background-image: url("/images/background3.png");
  background-size: cover; /* ou "contain" selon votre préférence */
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;
