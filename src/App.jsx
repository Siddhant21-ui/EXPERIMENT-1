import { useContext } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </>
  );
}

export default App;
