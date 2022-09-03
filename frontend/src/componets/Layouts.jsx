import Navbar from "./Navbar";

function Layouts({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
}

export default Layouts;
