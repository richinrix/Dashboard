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
      className="w-full relative md:w-1/5  bg-brand-darkBlue flex flex-col  py-14 pl-12"
    >
      <div class="text-3xl font-bold text-white mb-5">Dash.</div>
      {sections.map((section) => {
        return (
          <a
            href={section.link}
            class="flex items-center cursor-pointer w-max  my-3"
          >
            <img
              src={section.icon}
              className="w-4 object-contain  mr-3"
              alt=""
            />
            <div
              className={`text-white    text-lg w-full  ${
                path === section.link
                  ? "text-white font-bold "
                  : "text-gray-300"
              }`}
            >
              {section.name}
            </div>
          </a>
        );
      })}
      <div class="  absolute bottom-14  text-gray-200 flex flex-col">
        <div className="mb-3">Help</div>
        <div className="my-3">Contact Us</div>
        <div className="cursor-pointer" onClick={(e) => handleLogOut(e)}>
          Sign out
        </div>
      </div>
    </div>
  );
};

export default Nav;
