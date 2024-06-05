import { Link } from "react-router-dom";

const Card = ({product}) => {
    const {_id,name,description,price,image_url}=product;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p><span className="font-bold">About:</span> {description}</p>
        <p ><span className="font-bold">Price:</span> {price}</p>
        <div className="card-actions justify-end">
          <Link to={`products/${_id}`} className="btn btn-primary">See details</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
