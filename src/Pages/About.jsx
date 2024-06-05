import React from "react";

const About = () => {
  return (
    <div className="m-5">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/interior-clothing-store-with-stylish-merchandise-racks-fashionable-brand-design-casual-wear-modern-boutique-empty-fashion-showroom-shopping-centre-with-elegant-merchandise_482257-65537.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Amar Shop</h1>
            <p className="mb-5">
              We realise that we have a unique opportunity to make a positive
              impact across South Asia, and we want to achieve this at every
              touch point.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 m-10">
        <div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img className="h-60"
                src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Check out new phone</h2>
              <p>Click the button to watch on review video</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img className="h-60"
                src="https://img.freepik.com/free-photo/red-luggage-yellow-background-isolated_1303-14305.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Get your new travel beg</h2>
              <p>Click the button to get a perfect match for you</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Click</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img className="h-60 w-40" 
                src="https://img.freepik.com/free-vector/3d-gift-voucher-with-gift-box-pink-coupon-sales-discount-percentage-coupon-label_40876-3649.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Find new coupon</h2>
              <p>Click the button for grab you coupon</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">here</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
