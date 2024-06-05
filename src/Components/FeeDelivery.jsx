import React from 'react';
import { Link } from 'react-router-dom';

const FeeDelivery = () => {
  const token = localStorage.getItem('token')
    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Enjoy free Delivery</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      {
        !token?(<Link to="/login" className="btn btn-primary">Login Now</Link>):(<a href='https://play.google.com/store/apps?hl=en' className="btn btn-primary">Download app</a>)
      }
    </div>
  </div>
</div>
        </div>
    );
};

export default FeeDelivery;