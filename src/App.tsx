// src/App.tsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <>
      <Navbar /> {/* Navbar is always visible */}
      <Routes>
        {/* This is the crucial part: only one route to render the Home component */}
        <Route path="/" element={<Home />} />
        {/* If for some reason you are hitting /#/hero as a direct URL and want Home to render: */}
        {/* <Route path="/hero" element={<Home />} /> */}
        {/* But ideally, your app should always load at /#/ */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
