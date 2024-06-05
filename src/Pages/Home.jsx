import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import Hero from "../Components/Hero";
import MobileApp from "../Components/MobileApp";
import FeeDelivery from "../Components/FeeDelivery";
import Slider from "../Components/SharedComponent/Slider";


const Home = () => {
  const data = useLoaderData();
  const [filteredData, setFilteredData] = useState(data.slice(0, 4)); 
  const [displayCount, setDisplayCount] = useState(4);
  const [searchText, setSearchText] = useState("");
  

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value.trim().toLowerCase();

    if (!search) {
      setFilteredData(data);
      return;
    }

    const searchWords = search.split(" ");

    const newFilteredData = data.filter((item) =>
      searchWords.some((word) => item.description.toLowerCase().includes(word))
    );
    setFilteredData(newFilteredData.slice(0, displayCount));
    setSearchText(search);

    setFilteredData(newFilteredData);
  };
  const loadMore = () => {
    setDisplayCount(displayCount + 4); // Load additional 12 items
    setFilteredData(filteredData.concat(data.slice(displayCount, displayCount + 4)));
  };

  const token = localStorage.getItem("token");
  // console.log(token);
  // console.log(data);

  const imageLink = ["https://icms-image.slatic.net/images/ims-web/d6426a95-8b18-4ee1-9cbf-f5b188a9f9b8.jpg","https://icms-image.slatic.net/images/ims-web/75e59156-3c3c-4d9a-a776-bb9d4b0373d9.jpg","https://icms-image.slatic.net/images/ims-web/3cd0cd0d-be36-4c7d-bf11-269b5a5f3c1a.jpg"]

  return (
    <div>    
     <div className="z-0">
     <Slider links={imageLink}></Slider>
     </div>
      <form onSubmit={handleSearch} className="flex items-center gap-2 m-10">
        <label className="input input-bordered grow">
          <input
            name="search"
            type="text"
            className="grow flex mt-3"
            placeholder="Search"
          />
        </label>
        <button
          type="submit"
          className="flex items-center p-4 bg-black rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70 text-white"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
      <div className="flex flex-wrap gap-10 items-center justify-center m-5">
        {filteredData.length == 0 && (
          <div>
            {/* <h1 className="mt-52">No data found</h1> */}
            <img
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg"
              alt=""
            />
          </div>
        )}

        {filteredData.map((product) => (
          <Card key={product._id} product={product} />
        ))}
        
      </div>
      {filteredData.length < data.length && ( // Show "View More" button if there are more items to load
        <div className="flex justify-center flex-wrap">
          <button
            onClick={loadMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            View More
          </button>
        </div>
      )}
      <Hero></Hero>
      <MobileApp></MobileApp>
      <FeeDelivery></FeeDelivery>
    </div>
  );
};

export default Home;
