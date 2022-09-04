import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

function Layouts({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">{children}</div>
      </main>
      <ToastContainer />
    </>
  );
}

export default Layouts;
