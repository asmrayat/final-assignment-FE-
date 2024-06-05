import { Link } from "react-router-dom";

const Card = ({product}) => {
    const {_id,name,description,price,image_url}=product;
  return (
    <div className="card w-80 bg-base-100 shadow-2xl p-1">
      <figure>
        <img
        className="w-full h-40 object-cover"
          src={image_url}
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
