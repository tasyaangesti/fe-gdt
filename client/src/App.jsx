import "./App.css";
import { Dashboard } from "./component/Dashboard";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#F9F9F9]">
        <Navbar />
        <Dashboard />
        <Footer />
      </div>
    </>
  );
}

export default App;
