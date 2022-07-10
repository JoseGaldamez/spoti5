import { auth } from "./utils/firebase";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import "./App.scss";
import Auth from "./pages/auth/Auth";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  auth.onAuthStateChanged((currentUser) => {
    if (!currentUser) {
      setUser(null);
    } else {
      setUser(currentUser);
      console.log(currentUser);
    }

    setIsLoading(false);
  });

  function logout() {
    auth.signOut();
  }

  if (isLoading) {
    return null;
  }

  return (
    <>
      {!user ? <Auth /> : <UserLogged logout={logout} />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        puaseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

function UserLogged({ logout }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Usuario logueado</h1>
      <button onClick={logout}>Cerrar sesion</button>
    </div>
  );
}

export default App;
