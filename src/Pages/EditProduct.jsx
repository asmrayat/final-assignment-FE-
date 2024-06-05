import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const data = useLoaderData();
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [price, setPrice] = useState(data.price);
  const [image_url, setImage_url] = useState(data.image_url);
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
        fetch(`https://final-assignment-be.onrender.com/products/${data._id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
          },
          body: JSON.stringify(addResult),
        })
          .then((res) => res.json())
          // .then((data) => console.log(data));
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product name"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="Description"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            placeholder="Price"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Image(ULR only)</span>
            <span className="label-text">
              use{" "}
              <a
                target="_blank"
                className="text-[#1c2b75] font-bold"
                href="https://imgbb.com/"
              >
                imgbb
              </a>{" "}
              to upload image
            </span>
          </label>
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
            placeholder="Image"
            className="input input-bordered w-80"
          />
        </div>
        <button className="btn btn-success mt-5 w-80 text-white">Submit</button>
      </form>
    </div>
  );
};

export default EditProduct;
