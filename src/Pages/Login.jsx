import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Components/Login-Reg/GoogleLogin";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    await signIn(email, password);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl text-center font-bold mt-10">Login</h1>
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
              <div className="form-control ">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <button className="btn btn-primary sm:w-96 lg:w-full">
                  Login
                </button>
              </div>
            </form>

            <div className="ms-7 me-7 mb-5">
              <div className="form-control mt-6">
                <GoogleLogin></GoogleLogin>
              </div>
              <label className="label ">
                <a>
                  New to this site?{" "}
                  <Link to="/register" className="font-bold">
                    Register
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

export default Login;
