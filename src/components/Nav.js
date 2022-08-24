import React from "react";
import {
  dashboardIcon,
  settingsIcon,
  transactionIcon,
  userIcon,
  scheduleIcon,
} from "../assets";
const Nav = ({ activeSection }) => {
  const path = window.location.pathname;
  const sections = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: dashboardIcon,
    },
    {
      name: "Transactions",
      link: "/transactions",
      icon: transactionIcon,
    },
    {
      name: "Schedules",
      link: "/schedules",
      icon: scheduleIcon,
    },
    { name: "Users", link: "/users", icon: userIcon },
    {
      name: "Settings",
      link: "/settings",
      icon: settingsIcon,
    },
  ];
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.setItem("signedInStat", false);
    window.location.href = "/";
  };
  return (
    <div
      style={{
        borderRadius: "30px",
      }}
      className="w-full font-montserrat  relative md:w-1/5  bg-brand-darkBlue flex flex-col px-4 py-2 md:py-14 md:pl-12"
    >
      <div class="text-xl md:text-3xl font-montserrat-bold font-bold text-white md:mb-5 hidden md:block">
        Dash.
      </div>
      <div class="flex md:flex-col md:flex-nowrap flex-row justify-between">
        {sections.map((section) => {
          return (
            <a
              href={section.link}
              class="flex flex-col md:flex-row justify-center  items-center cursor-pointer w-max md:mx-0 mx-4  my-3"
            >
              <img
                src={section.icon}
                className="w-5 md:w-4 object-contain object-center  md:mr-3"
                alt=""
              />
              <div
                className={`text-white hidden md:block   text-lg w-full  ${
                  path === section.link
                    ? "text-white font-bold "
                    : "text-gray-300"
                }`}
              >
                {section.name}
              </div>
              <div
                style={{
                  height: "1px",
                }}
                class={`bg-white w-6 my-2 block md:hidden ${
                  path == section.link ? "" : "opacity-0"
                }`}
              />
            </a>
          );
        })}
      </div>
      <div class="  md:absolute bottom-14  text-gray-200 flex flex-row justify-between md:flex-col px-5 md:px-0">
        <div className="  md:mb-3">Help</div>
        <div className="  md:my-3">Contact Us</div>
        <div className="cursor-pointer" onClick={(e) => handleLogOut(e)}>
          Sign out
        </div>
      </div>
    </div>
  );
};

export default Nav;
