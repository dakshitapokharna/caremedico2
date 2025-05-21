import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import Hospitals from "./Hospitals";
const App = () => {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
