import React, { useState, useEffect } from "react";
import { Nav, Title } from "../components";
import { leftIcon, rightIcon } from "../assets";
const Users = () => {
  const { userRecords } = JSON.parse(localStorage.getItem("userDetails"));
  // split uerrecords into group of 5s

  const [users, setUsers] = useState(userRecords);
  const [page, setPage] = useState(1);
  const recordLength = Math.ceil(users.length / 5);
  const groups = new Array(recordLength)
    .fill(0)
    .map((_, i) => users.slice(i * 5, (i + 1) * 5));
  const [filter, setFilter] = useState();
  useEffect(() => {
    if (filter) {
      const filteredUsers = userRecords.filter((user) => {
        return user.name.toLowerCase().includes(filter.toLowerCase());
      });
      if (filteredUsers.length === 0) setUsers(userRecords);
      else setUsers(filteredUsers);
    } else {
      setUsers(userRecords);
    }
  }, [filter]);
  const [filterRole, setFilterRole] = useState("all");
  useEffect(() => {
    if (filterRole !== "all") {
      console.log(filterRole);
      const filteredUsers = userRecords.filter((user) => {
        if (filterRole === "all") return true;
        // else return (user.adminStat === filterRole) === "Admin";
        else if (filterRole === "Admin") return user.adminStat === true;
        else return user.adminStat === false;
      });
      if (filteredUsers.length === 0) setUsers(userRecords);
      else setUsers(filteredUsers);
    } else {
      setUsers(userRecords);
    }
  }, [filterRole]);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row p-3 md:p-6 bg-brand-bgGray font-lato ">
      <Nav />
      <div class="w-full h-full p-3 md:p-8">
        <Title />
        <div class="bg-white w-full h-full p-2 md:p-5 my-2 rounded-xl">
          {/* title */}
          <div class=" flex flex-col md:flex-row justify-between">
            <div class=" text-base md:text-2xl font-bold font-montserrat">
              Users Records
            </div>
            <div class="md:flex   grid grid-cols-8 gap-2">
              <div class="flex items-center px-4 py-1 bg-gray-300 rounded-xl col-span-5">
                <input
                  type="text"
                  class=" bg-transparent outline-none "
                  placeholder="Search in table.."
                  onChange={(e) => setFilter(e.target.value)}
                />
                <img
                  src="https://img.icons8.com/ios/50/000000/search--v1.png"
                  className="w-4 hidden md:block object-contain"
                  alt=""
                />
              </div>
              <div class=" border-2 rounded-xl  md:mx-4  border-gray-500 px-3 col-span-3 flex justify-center items-center">
                <img
                  src="https://img.icons8.com/ios/50/000000/filter--v1.png"
                  className="w-4 object-contain mr-1"
                  alt=""
                />
                <select
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="outline-none bg-transparent"
                >
                  <option value="all">All</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div class=" bg-brand-darkBlue hidden md:flex items-center px-3 text-white py-1 rounded-xl">
                + Add
              </div>
            </div>
          </div>
          {/* displaying user records */}
          {groups[page - 1].map((user, index) => (
            <div
              style={{
                background: index % 2 === 0 ? "#EDEDED" : "#F5F5F5",
              }}
              className="grid grid-cols-12 gap-4 px-2  py-4 my-3 rounded-xl  items-center "
            >
              <div className="col-span-3 md:col-span-2 flex items-center justify-center">
                <div
                  style={{
                    backgroundImage: `url(${user.image})`,
                  }}
                  className="bg-cover rounded-full bg-no-repeat bg-center w-10 h-10 bg-blue-200"
                />
              </div>

              <div className=" col-span-9 md:col-span-3 text-lg ">
                {user.name}
              </div>
              <div className=" text-sm col-span-4 md:col-span-3 text-center md:text-lg ">
                {user.email}
              </div>
              <div className=" text-sm col-span-4 md:col-span-2 text-center md:text-lg ">
                {user.gender}
              </div>
              <div className=" text-sm col-span-4 md:col-span-2 text-center md:text-lg ">
                {user.adminStat ? "Admin" : "User"}
              </div>
            </div>
          ))}
          {/* pagination */}
          <div class="flex items-center w-full justify-end">
            <img
              onClick={() => page !== 1 && setPage(page - 1)}
              className="mx-2  p-2 rounded-xl flex items-center justify-center  cursor-pointer "
              style={{
                border: " 1px solid #EAEAEA",
                borderRadius: "10px",
              }}
              src={leftIcon}
              alt=""
            />
            {groups.map((group, index) => (
              <div
                onClick={() => setPage(index + 1)}
                style={{
                  border: " 1px solid #EAEAEA",
                  borderRadius: "10px",
                }}
                className={`  px-2 rounded-xl flex items-center justify-center mx-1 cursor-pointer ${
                  index + 1 == page ? "bg-gray-300" : ""
                }`}
              >
                {index + 1}
              </div>
            ))}
            <img
              onClick={() => page !== recordLength && setPage(page + 1)}
              className="mx-2  p-2 rounded-xl flex items-center justify-center  cursor-pointer "
              style={{
                border: " 1px solid #EAEAEA",
                borderRadius: "10px",
              }}
              src={rightIcon}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
