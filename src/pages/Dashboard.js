import React, { useState, useEffect } from "react";
import { Nav, Title, Graph, PieChart } from "../components";
import {
  bellIcon,
  usersIcon,
  likesIcon,
  revenueIcon,
  transactionIcon,
  transactionIcon2,
} from "../assets";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  if (user.length === 0) {
    localStorage.setItem("signedInStat", false);
    window.location.href = "/";
  }
  return (
    <div className="min-h-screen w-full flex p-6 bg-brand-bgGray ">
      <Nav activeSection="Dashboard" />
      <div class="w-full  p-8">
        <Title />
        {/* highlights */}
        <div class="grid grid-cols-4 gap-4 my-5">
          <div
            style={{
              background: "#DDEFE0",
            }}
            class="p-4 rounded-xl flex flex-col  "
          >
            <div class="w-full flex justify-end">
              <img src={revenueIcon} className="w-6 object-contain" alt="" />
            </div>
            <div>Total Revenues</div>
            {user && (
              <div class="text-2xl font-bold">
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
            <div>Total Transactions</div>
            <div className="text-2xl font-bold">
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
            <div>Total Likes</div>
            <div className="text-2xl font-bold">
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
            <div>Total Users</div>
            <div className="text-2xl font-bold">
              {user.totalUsers.toLocaleString()}
            </div>
          </div>
        </div>
        {/* chart */}
        <Graph />
        {/* pie chart adn schedule */}

        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
