import React from "react";
import NormalLoginForm from "./pages/loginpage";
import Otppage from "./pages/otppage";
import Homepage from "./pages/homepage";
import Resumemaking from "./pages/resumemaking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const allroutes = [
    {
      paths: "/login",
      elements: <NormalLoginForm />,
    }, {
      paths: "/otp",
      elements: <Otppage />,
    },
    {
      paths: "/home",
      elements: <Homepage />,
    },
    {
      paths: "/home/resumemaking",
      elements: <Resumemaking />,
    }
  ];
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        background: `url("https://images.unsplash.com/photo-1686854010079-455de3e8db41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
      }}
    >
      <BrowserRouter>
        <Routes>
          {allroutes.map(({ paths, elements }, i) => (
            <Route key={i} path={paths} element={elements} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
