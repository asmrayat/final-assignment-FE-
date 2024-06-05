import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import GoogleLogin from "../Components/Login-Reg/GoogleLogin";

const Register = () => {
  const token = localStorage.getItem('token');
  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [passMatch, setPassMatch] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);

    if (password !== confirmPassword) {
      setPassMatch(false);
    } else {
      setPassMatch(true);
      await createUser(email, password).then((data) => {
        const name = data.user.displayName;
        const email = data.user.email;
        const result = { name, email };
  
        fetch("https://final-assignment-be.onrender.com/create-user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(result),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      });;
    }
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl text-center font-bold mt-10 ">Register now</h1>
      <div className="hero  bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left sm:hidden lg:block">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm  bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered sm:w-96 lg:w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered sm:w-96 lg:w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password "
                  className="input input-bordered sm:w-96 lg:w-full"
                  required
                />
              </div>
              {!passMatch && (
                <p className="text-[#ff1515]">password do not match</p>
              )}

              <div className="form-control">
                <button className="btn btn-primary sm:w-96 lg:w-full">Register</button>
              </div>
            </form>
            <div className="ms-7 me-7 mb-5">
              <div className="form-control mt-6">
              <GoogleLogin></GoogleLogin>
              </div>
              <label className="label ">
                <a>
                  Already registered?{" "}
                  <Link to="/login" className="font-bold">
                    login
                  </Link>
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
