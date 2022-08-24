import React from "react";
import CanvasJSReact from "./canvasjs.react";
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
const PieChart = () => {
  const colors = [
    "4f81bc",
    "c0504e",
    "9bbb58",
    "23bfaa",
    "8064a1",
    "8064a1",
    "f79647",
  ];
  const { topProducts } = JSON.parse(localStorage.getItem("userDetails"));
  const data = [];
  topProducts.forEach((product, index) => {
    data.push({
      y: parseInt(product.percentage.slice(0, 2)),
      label: product.name,
      color: "#" + colors[index],
    });
  });

  const options = {
    // exportEnabled: true,
    animationEnabled: true,
    title: {
      //   text: "Website Traffic Sources",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        radius: "100%",
        toolTipContent: "<b>{label}</b>: {y}%",
        // showInLegend: "true",
        // legendText: "{label}",
        // indexLabelFontSize: 16,
        indexLabel: " ",
        indexLabelPlacement: "inside",
        dataPoints: data,
      },
    ],
  };
  return (
    <div className="  my-2 w-full">
      {/* */}
      <div class="grid grid-cols-2 gap-4 my-5">
        <div class="bg-white rounded-xl p-8 flex flex-col ">
          <div class="flex justify-between">
            <div class="text-xl font-bold">Top Products</div>
            <div class="text-gray-500 text-sm flex items-center">
              <div>May-June 2021 </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3 mt-3">
            <div class="w-full h-full  flex justify-center items-center">
              <CanvasJSChart options={options} />
            </div>
            <div class="flex flex-col h-full  justify-center pl-10 ">
              {data.map((item, index) => {
                return (
                  <div className="my-2">
                    <div class="flex items-center ">
                      <div
                        class="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div class="text-sm ml-2 font-bold tracking-wide">
                        {item.label}
                      </div>
                    </div>
                    <div class="ml-5 text-xs text-gray-500">{item.y}%</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl p-8">
          <div class=" flex justify-between items-center">
            <span class="text-xl font-bold">Today's Schedule</span>
            <span class="text-gray-500 text-xs cursor-pointer">
              See All {">"}
            </span>
          </div>
          <div class="flex items-center h-auto w-full my-4">
            <div class="h-16 mr-3 w-2 bg-green-300"></div>
            <div class="flex flex-col h-auto">
              <div class="text-sm font-semibold">Meeting with client</div>
              <div class="text-xs text-gray-500">10:00-11:00</div>
              <div class="text-xs text-gray-500">at Sunset Road, Kuta</div>
            </div>
          </div>
          <div class="flex items-center h-auto w-full my-4">
            <div class="h-16 mr-3 w-2 bg-red-300"></div>
            <div class="flex flex-col h-auto">
              <div class="text-sm font-semibold">Meeting with client</div>
              <div class="text-xs text-gray-500">10:00-11:00</div>
              <div class="text-xs text-gray-500">at Sunset Road, Kuta</div>
            </div>
          </div>
          <div class="flex items-center h-auto w-full my-4">
            <div class="h-16 mr-3 w-2 bg-yellow-300"></div>
            <div class="flex flex-col h-auto">
              <div class="text-sm font-semibold">Meeting with client</div>
              <div class="text-xs text-gray-500">10:00-11:00</div>
              <div class="text-xs text-gray-500">at Sunset Road, Kuta</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
