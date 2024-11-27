import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Create Context for Authentication
const AuthContext = createContext();

// Create a custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("username"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("username"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <Routes>
          {/* Conditional routing based on isLoggedIn */}
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Signup />}
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
