import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// 👇 Inre wrapper för att använda `useLocation` på rätt plats
function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
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
