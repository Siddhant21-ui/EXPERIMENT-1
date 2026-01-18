import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");

  const login = (email) => {
    setIsLoggedIn(true);
    setUserName(email);

    if (email === "admin@example.com") {
      setRole("admin");
    } else {
      setRole("user");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
