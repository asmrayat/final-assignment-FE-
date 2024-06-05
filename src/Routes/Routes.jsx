import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import DeshboardLayout from "../Layouts/DeshboardLayout";
import Deshboard from "../Pages/Deshboard";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRouter from "./private/PrivateRouter";
import ProductDetails from "../Pages/ProductDetails";
import AddProduct from "../Pages/AddProduct";
import EditProfile from "../Pages/EditProfile";
import EditProduct from "../Pages/EditProduct";
import GiftCard from "../Pages/GiftCard";
const token = localStorage.getItem("token");
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://final-assignment-be.onrender.com/products"),
        headers: {
          "Content-type": "application/json",
        },
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `https://final-assignment-be.onrender.com/products/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/gift-card",
        element: <GiftCard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DeshboardLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <Deshboard />
          </PrivateRouter>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRouter>
            <AddProduct />
          </PrivateRouter>
        ),
      },
      {
        path: "products/:id",
        loader: ({ params }) =>
          fetch(
            `https://final-assignment-be.onrender.com/products/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <EditProduct />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
