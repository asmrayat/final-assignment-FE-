import { Link, Outlet, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const DeshboardLayout = () => {
  const { logout } = useAuth();
  const handleLogOut=()=>{
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        localStorage.clear();
        Swal.fire({
          title: "Logged out",
          icon: "success"
        });
      }
    });

  }
  

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button absolute top-0 left-0 mt-4 ml-4 lg:hidden"
        >
          =
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col">
          {/* Sidebar content here */}
          <li>
            <Link to="">All Products</Link>
          </li>
          <li>
            <Link to="add-product">Add Products</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="mt-auto">
            <button
              onClick={handleLogOut}
              className="btn bg-red-500 text-white"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeshboardLayout;

