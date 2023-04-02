import React from "react";
import { useState } from "react";

const Navbar = ({
  handleTopics,
  setsearchtext,
}: {
  handleTopics: (value: string) => void;
  setsearchtext: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <div>
        <div className="flex  bg-white w-full justify-between items-center px-5 md:px-20">
          <p className="font-semibold text-3xl py-3">NEWS API</p>
          <input
            onChange={(e) => setsearchtext(`q=${e.target.value}&`)}
            className="w-96 h-12 my-3 rounded-xl bg-white border-2 border-neutral-200 pl-5 mx-5 "
            type="text"
            placeholder="Search..."
          />
          <button
            onClick={() => setCollapse(!collapse)}
            className={`border-2 transition-all ease-in-out  border-black px-2 h-fit flex align rounded-xl hover:scale-110 ${
              collapse ? `text-white bg-black` : `text-black bg-white`
            }`}
          >
            Filters{" "}
          </button>
        </div>
        <></>
        <div
          className={`bg-white bg-opacity-90 w-full transition-all duration-300 ${
            collapse ? ` scale-100 h-fit` : ` scale-0 h-0`
          }`}
        >
          <div className="flex flex-col justify-start items-center bg-white">
            <button
              onClick={() => handleTopics("business")}
              className="filterButtons"
            >
              Business
            </button>
            <button
              onClick={() => handleTopics("entertainment")}
              className="filterButtons"
            >
              Entertainment
            </button>
            <button
              onClick={() => handleTopics("general")}
              className="filterButtons"
            >
              General
            </button>
            <button
              onClick={() => handleTopics("health")}
              className="filterButtons"
            >
              Health
            </button>
            <button
              onClick={() => handleTopics("science")}
              className="filterButtons"
            >
              Science
            </button>
            <button
              onClick={() => handleTopics("sports")}
              className="filterButtons"
            >
              Sports
            </button>
            <button
              onClick={() => handleTopics("technology")}
              className="filterButtons"
            >
              Technology
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
