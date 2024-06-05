import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="">
      <div
        className="hero mt-5 p-5"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              For getting free coupon 
            </p>
            <Link to="/gift-card" className="btn btn-primary">Get now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
