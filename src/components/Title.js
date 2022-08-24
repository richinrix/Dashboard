import React from "react";
import { bellIcon } from "../assets";
const Title = () => {
  const path = window.location.pathname;
  const { image } = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div class="flex justify-between w-full">
      <div class="text-2xl font-bold">
        {path.slice(1)[0].toUpperCase() + path.slice(2)}
      </div>
      <div class="flex">
        <div class="bg-white flex px-3 py-1 rounded-xl ">
          <input
            type="text"
            class="bg-white px-1 py-1 outline-none"
            placeholder="Search..."
          />
          <img
            src="https://img.icons8.com/ios/50/000000/search--v1.png"
            className="w-4 object-contain"
            alt=""
          />
        </div>
        {/* bell icon */}
        <img src={bellIcon} className="w-4 object-contain mx-4" alt="" />
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          class="bg-cover rounded-full bg-no-repeat bg-center w-10 h-10 bg-red-300"
        />
      </div>
    </div>
  );
};

export default Title;
