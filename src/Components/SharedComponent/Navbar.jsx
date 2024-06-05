import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { logout, user } = useAuth();
  const [userData, setUserData] = useState([]);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        localStorage.clear();
        Swal.fire({
          title: "Logged out",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://final-assignment-be.onrender.com/get-user/${user.email}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [user]);

  return (
    <div className="navbar bg-base-100 shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" z-10 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gift-card">Gift Card</Link>
            </li>
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/Register">Register</Link>
              </li>
            )}
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {user && (
              <li>
                <button
                  onClick={() => logout()}
                  className="btn bg-red-500 text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Amar Shop
        </Link>
      </div>
      <div className=" z-10 navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gift-card">Gift Card</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/Register">Register</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end z-10 ">
        {user && (
          <details className="dropdown dropdown-end ">
            <summary className="m-1 avatar">
              <div className="avatar">
                {user && (
                  <div className="w-10 m-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} />
                  </div>
                )}
              </div>
            </summary>
            <ul className="shadow-2xl p-2 menu dropdown-content z-[1] bg-base-200 rounded-box w-96">
              <li>
                <a>
                  <span className="font-bold">Name:</span>
                  {userData.name}
                </a>
              </li>
              {userData.age && (
                <li>
                  <a>
                    <span className="font-bold">Age:</span>
                    {userData.age}
                  </a>
                </li>
              )}
              {userData.number && (
                <li>
                  <a>
                    <span className="font-bold">Number:</span>
                    {userData.number}
                  </a>
                </li>
              )}
              <li>
                <a>
                  <span className="font-bold">Email:</span>
                  {user.email}
                </a>
              </li>
              <li>
                <Link
                  to="/edit-profile"
                  className="btn bg-[#208eca] text-white"
                >
                  Edit profile
                </Link>
              </li>
              {user && (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-red-500 text-white"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </details>
        )}
      </div>
    </div>
  );
};

export default Navbar;
