import React, { useState, useEffect } from "react";
import CanvasJSReact from "./canvasjs.react";
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Graph = () => {
  const { activity } = JSON.parse(localStorage.getItem("userDetails"));
  //   get all keys of activity.user
  const keys = Object.keys(activity.user);
  const [currentKey, setCurrentKey] = useState(keys[0]);
  const userData = [];
  for (const key in activity.user[currentKey]) {
    userData.push({ y: activity.user[currentKey][key], label: key });
  }
  const guestData = [];
  for (const key in activity.guest[currentKey]) {
    guestData.push({ y: activity.guest[currentKey][key], label: key });
  }

  const options = {
    animationEnabled: true,
    title: {
      text: "",
    },
    axisY: {
      title: " ",
    },
    toolTip: {
      shared: true,
      content: "{name}: {y}",
    },
    data: [
      {
        type: "spline",
        name: "User",
        legendMarkerType: "circle",
        dataPoints: userData,
      },
      {
        type: "spline",
        name: "Guest",
        legendMarkerType: "circle",
        dataPoints: guestData,
      },
    ],
  };

  return (
    <div class="bg-white rounded-xl p-3 md:p-8">
      <div className="text-2xl font-bold font-montserrat">Activites</div>
      <div class="flex flex-col md:flex-row justify-between font-lato">
        <select
          onChange={(e) => setCurrentKey(e.target.value)}
          class="text-gray-500  bg-transparent w-max mb-3 md:my-0 text-sm outline-none"
        >
          {keys.map((key) => {
            return <option value={key}>{key}</option>;
          })}
        </select>
        {/* legend */}
        <div class="flex items-center justify-center my-1 md:my-0">
          <div className="flex items-center  mx-3 md:mx-5">
            <div
              style={{
                backgroundColor: "#c0504e",
              }}
              class="w-3 h-3  rounded-full mr-1"
            />
            <div class=" text-sm">Guests</div>
          </div>
          <div className="flex items-center mx-3 md:mx-5">
            <div
              style={{
                backgroundColor: "#4f81bc",
              }}
              class="w-3 h-3  rounded-full mr-1"
            />
            <div class=" text-sm">Users</div>
          </div>
        </div>
      </div>
      {userData && guestData && (
        <CanvasJSChart options={options}></CanvasJSChart>
      )}
    </div>
  );
};

export default Graph;
