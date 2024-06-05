import React from "react";

const MobileApp = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-vector/home-screen-concept-illustration_114360-4703.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Get our mobile app today</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href="https://play.google.com/store/apps?hl=en" className="btn btn-primary">Download now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
