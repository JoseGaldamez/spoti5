import auth from "./utils/firebase";

import "./App.scss";

function App() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("user logged in");
    } else {
      console.log("user logged out");
    }
  });
  return (
    <div>
      <h1>App en electron</h1>
    </div>
  );
}

export default App;
