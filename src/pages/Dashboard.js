import React from "react";
import { Nav, Title, Graph, PieChart } from "../components";
import { usersIcon, likesIcon, revenueIcon, transactionIcon2 } from "../assets";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  if (user.length === 0) {
    // redirecting if user is not logged in
    localStorage.setItem("signedInStat", false);
    window.location.href = "/";
  }
  return (
    <div className="min-h-screen w-full flex md:flex-row flex-col p-3 md:p-6 bg-brand-bgGray ">
      <Nav />
      <div class="w-full  p-4 md:p-8">
        <Title />
        {/* highlights */}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-5 font-lato">
          <div
            style={{
              background: "#DDEFE0",
            }}
            class="p-4 rounded-xl flex flex-col  "
          >
            <div class="w-full flex justify-end">
              <img src={revenueIcon} className="w-6 object-contain" alt="" />
            </div>
            <div className="text-sm md:text-lg ">Total Revenues</div>
            {user && (
              <div class="text-base md:text-2xl font-bold">
                ${user.totalRevenues.toLocaleString()}
              </div>
            )}
          </div>
          <div
            style={{
              background: "#F4ECDD",
            }}
            class="p-4 rounded-xl flex flex-col  "
          >
            <div class="w-full flex justify-end">
              <img
                src={transactionIcon2}
                className="w-6 object-contain "
                alt=""
              />
            </div>
            <div className="text-sm md:text-lg ">Total Transactions</div>
            <div className="text-base md:text-2xl font-bold">
              {user.totalTransactions.toLocaleString()}
            </div>
          </div>
          <div
            style={{
              background: "#EFDADA",
            }}
            class="p-4 rounded-xl flex flex-col  "
          >
            <div class="w-full flex justify-end">
              <img src={likesIcon} className="w-6 object-contain" alt="" />
            </div>
            <div className="text-sm md:text-lg ">Total Likes</div>
            <div className="text-base md:text-2xl font-bold">
              {user.totalLikes.toLocaleString()}
            </div>
          </div>
          <div
            style={{
              background: "#DEE0EF",
            }}
            class="p-4 rounded-xl flex flex-col  "
          >
            <div class="w-full flex justify-end">
              <img src={usersIcon} className="w-6 object-contain" alt="" />
            </div>
            <div className="text-sm md:text-lg ">Total Users</div>
            <div className="text-base md:text-2xl font-bold">
              {user.totalUsers.toLocaleString()}
            </div>
          </div>
        </div>
        {/* chart */}
        <Graph />
        {/* pie chart and schedule */}
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
