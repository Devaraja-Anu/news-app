import React from "react";
import { useState } from "react";
import Collapsible from "react-collapsible";

const Navbar = ({
  handleTopics,
  setsearchtext,
}: {
  handleTopics: (value: string) => void;
  setsearchtext: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <div className="flex  bg-white w-full justify-between items-center px-5 md:px-20">
        <p className="font-semibold text-3xl py-3">NEWS API</p>
        <button
          onClick={() => setCollapse(!collapse)}
          className={`border-2 transition-all ease-in-out  border-black px-2 h-fit flex align rounded-xl hover:scale-110 ${
            collapse ? `text-white bg-black` : `text-black bg-white`
          }`}
        >
          Filters{" "}
        </button>
      </div>

      <Collapsible trigger={""}>
        <div
          className={`bg-white bg-opacity-90 w-full  flex justify-around transition-all ease-in-out duration-500 
          }`}
        >
          <div className="flex flex-col justify-start items-center bg-white">
            <button
              onClick={() => handleTopics("business")}
              className="h-full px-3 py-2 rounded-xl focus:bg-blue-500 focus:text-white hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
            >
              Business
            </button>
            <button
              onClick={() => handleTopics("entertainment")}
              className="h-full px-3 py-2  rounded-xl focus:bg-blue-500 focus:text-white hover:bg-blue-400 ease-in-out transition-all hover:text-white  font-mainFont"
            >
              Entertainment
            </button>
            <button
              onClick={() => handleTopics("general")}
              className="h-full px-3 py-2  rounded-xl focus:bg-blue-500 focus:text-white selection:bg-blue-400 hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
            >
              General
            </button>
            <button
              onClick={() => handleTopics("health")}
              className="h-full px-3 py-2  rounded-xl focus:bg-blue-500 focus:text-white hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
            >
              Health
            </button>
            <button
              onClick={() => handleTopics("science")}
              className="h-full px-3 py-2  rounded-xl focus:bg-blue-500 focus:text-white hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
            >
              Science
            </button>
            <button
              onClick={() => handleTopics("sports")}
              className="h-full px-3 py-2  rounded-xl focus:bg-blue-500 focus:text-white hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
            >
              Sports
            </button>
            <button
              onClick={() => handleTopics("technology")}
              className="h-full px-3 py-2  rounded-xl focus:bg-blue-500 focus:text-white hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
            >
              Technology
            </button>
          </div>
        </div>
      </Collapsible>

      <div className="bg-white flex w-full justify-center">
        <input
          onChange={(e) => setsearchtext(`q=${e.target.value}&`)}
          className="w-96 h-12 my-3 rounded-xl bg-white border-2 border-neutral-200 pl-5 mx-5 mb-8"
          type="text"
          placeholder="Search..."
        />
        <button></button>
      </div>
    </div>
  );
};

export default Navbar;
