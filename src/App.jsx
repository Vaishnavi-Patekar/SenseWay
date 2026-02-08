// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "./components/Layout";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Signin from "./pages/SignIn";
// import Login from "./pages/Login";

// function App() {
//   return (
//   <div>
//     <Navbar />
//     <Home />
//     <Routes>
//             <Route element={<Layout />}></Route>
//         <Route path="/" element={<Home />} />
//         <Route path="/signin" element={<Signin />} />
//             <Route path="/login" element={<Login />} />
//       </Routes>
//   </div>
      
  
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES (NO NAVBAR) */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />

      {/* APP ROUTES (WITH NAVBAR) */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default App;
