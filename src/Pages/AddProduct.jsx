import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const data = useLoaderData();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const image_url = form.image_url.value;
    const addResult = { name, description, price, image_url };
    
    Swal.fire({
      title: "Do you want to submit the changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch("http://localhost:5000/create-post", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(addResult),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        form.reset();
        Swal.fire("Submited", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            className="input input-bordered w-80"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered w-80"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered w-80"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Image(ULR only)</span>
            <span className="label-text">use <a target="_blank" className="text-[#1c2b75] font-bold" href="https://imgbb.com/">imgbb</a> to upload image</span>
          </label>
          <input
            type="text"
            name="image_url"
            placeholder="Image"
            className="input input-bordered w-80"
            required
          />
        </div>
        <button className="btn btn-success mt-5 w-80 text-white">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
