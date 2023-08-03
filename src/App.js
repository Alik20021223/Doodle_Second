// import logo from './logo.svg';
import "./App.css";
// import './normalize.css'
// import Wall from './Components/Wall/Wall';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container container_adaptive">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
