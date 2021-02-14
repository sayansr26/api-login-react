import React, { useState } from "react";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  function handleLogin() {
    let credientals = { email: email, password: password };

    fetch("https://reqres.in/api/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credientals)
    })
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data.token);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-10 mx-auto">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-center">Welcome Back !</h5>
                <div className="input-group my-3">
                  <span className="input-group-text">E</span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Here"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group my-3">
                  <span className="input-group-text">P</span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="btn btn-primary shadow form-control"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
