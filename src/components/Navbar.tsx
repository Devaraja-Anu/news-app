import React from 'react'
import {useState} from 'react'

const Navbar = () => {

  const [searchtext, setsearchtext] = useState('')

  console.log(searchtext)


  return (
    <div>
      <div className="flex bg-white w-full justify-center">
        <p className="font-semibold text-3xl py-3">NEWS API</p>
      </div>

      <div className="bg-white bg-opacity-90 w-full  flex justify-around ">
        <div className="flex justify-start items-center ">
          <button
            value={"business"}
            className="h-full px-3 py-2 hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
          >
            Business
          </button>
          <button
            value={"entertainment"}
            className="h-full px-3 py-2 hover:bg-blue-400 ease-in-out transition-all hover:text-white  font-mainFont"
          >
            Entertainment
          </button>
          <button
            value={"general"}
            className="h-full px-3 py-2 hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
          >
            General
          </button>
          <button
            value={"health"}
            className="h-full px-3 py-2 hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
          >
            Health
          </button>
          <button
            value={"science"}
            className="h-full px-3 py-2 hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
          >
            Science
          </button>
          <button
            value={"sports"}
            className="h-full px-3 py-2 hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
          >
            Sports
          </button>
          <button
            value={"technology"}
            className="h-full px-3 py-2 hover:bg-blue-400 ease-in-out transition-all hover:text-white font-mainFont"
          >
            Technology
          </button>
        </div>
      </div>
      <div className='bg-white flex w-full justify-center'>
        <input
          onChange={(e) => setsearchtext(e.target.value)}
          className="w-64 h-8 my-3 rounded-xl bg-white border-2 border-neutral-200 pl-5 mx-5 "
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Navbar