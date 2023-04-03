import React from "react";
import { useState } from "react";

const Navbar = ({
  handleTopics,
  setsearchtext,
  selectedTopic,
  isLoading
}: {
  handleTopics: (value: string) => void;
  setsearchtext: React.Dispatch<React.SetStateAction<string>>;
  selectedTopic:string,
  isLoading:boolean
}) => {
  const [collapse, setCollapse] = useState(false);

  const filterTopics = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ];

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row bg-white w-full h-fit md:h-28 justify-between items-center px-5 lg:px-20">
          <p className="font-semibold text-3xl py-3 mx-5">NEWS API</p>
          <input
            onChange={(e) => setsearchtext(`q=${e.target.value}&`)}
            className=" sm:w-96 h-12 my-3 rounded-xl bg-white border-2 border-neutral-200 pl-5 mx-5 "
            type="text"
            placeholder="Search..."
          />
          <button
            onClick={() => setCollapse(!collapse)}
            className={`mx-5 border-2 my-5 transition-all ease-in-out text-xl px-8 py-1 md:px-10 md:py-3 h-fit flex align rounded-xl hover:scale-110 ${
              collapse
                ? `text-white bg-blue-400 border-white`
                : `text-blue-500 bg-white border-blue-400`
            }`}
          >
            Filters{" "}
          </button>
        </div>
        <></>
        <div
        onMouseLeave={()=>setCollapse(!collapse)}
          className={`bg-white bg-opacity-90 w-full transition-all duration-300 ${
            collapse ? ` scale-100 h-fit` : ` scale-0 h-0`
          }`
        }
        >
          <div className="flex flex-col justify-start items-center bg-white pb-10">


            {filterTopics.map((item,index) => {




              return (
                <button key={index}
              onClick={() => handleTopics(item)}
              className={`filterButtons ${selectedTopic == item ? `bg-blue-400 text-white` :`bg-white text-blue-400`}`}
              disabled={isLoading}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
              ) 
            })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
