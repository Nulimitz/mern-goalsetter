import { useState, useEffect } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { name, email, password, confirmpassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row mt-5">
      <div className="col-md-5 m-auto">
        <header className="text-center">
          <h1>
            <i className="bi bi-person"></i> Register
          </h1>
          <p>Please create an account</p>
        </header>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              name="confirmpassword"
              value={confirmpassword}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="w-100 btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
