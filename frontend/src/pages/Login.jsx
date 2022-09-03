import { useState, useEffect } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
            <i className="bi bi-box-arrow-in-right"></i> Login
          </h1>
          <p>Login and start setting goals</p>
        </header>
        <form onSubmit={onSubmit}>
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
          <button type="submit" className="w-100 btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
