import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Dcard = ({ product, onDelete }) => {
  const { _id, name, description, price, image_url } = product;

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token"); // Get the JWT token from localStorage

        fetch(`https://final-assignment-be.onrender.com/products/${_id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
          },
        })
          .then((res) => res.json())
          .then((data) => {
         
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting your file.",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        {image_url ? (
          <img className="w-full h-40 object-cover" src={image_url} />
        ) : (
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="font-bold">{price}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${_id}`} className="btn btn-primary">
            See details
          </Link>
          <Link to={`products/${_id}`} className="btn bg-[#9ac824]">
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="btn bg-[#ff1212] text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dcard;
