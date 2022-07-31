import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./App.scss";
import LoggedNavigation from "./routes/LoggedNavigation";
import { Auth } from "./pages";

function App() {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setIsLoading(false);
  });

  function logout() {
    auth.signOut();
  }

  if (isLoading) {
    return null;
  }

  if (user === undefined) return null;

  return (
    <>
      {!user ? <Auth /> : <LoggedNavigation logout={logout} />}
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

export default App;
