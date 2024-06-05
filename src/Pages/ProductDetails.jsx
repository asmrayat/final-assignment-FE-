
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const data =useLoaderData();
    const {name,description,image_url,price}=data;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image_url}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
             {description}
            </p>
            <p className="py-5 font-bold">
             {price}
            </p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
