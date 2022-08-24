import React, { useState } from "react";
import { Nav, Title } from "../components";

const Settings = () => {
  //   const userDetails =
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row p-3 md:p-6 bg-brand-bgGray font-lato ">
      <Nav activeSection="Dashboard" />
      <div class="w-full h-full p-3 md:p-8">
        <Title />
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6 my-2">
          {/* profile info */}
          <div class="bg-white rounded-xl p-4 col-span-2 md:col-span-3  flex flex-col ">
            <div className="text-2xl font-bold font-montserrat">Profile</div>
            <div class="w-full flex flex-col md:flex-row justify-center">
              <div class="w-full md:w-2/6 flex justify-center flex-col items-center">
                <div
                  class="w-32 h-32 bg-cover bg-center bg-no-repeat rounded-full my-3 bg-red-300"
                  style={{
                    backgroundImage: `url(${userDetails.image})`,
                  }}
                />
                <div className="px-2 py-1 border-2 rounded-md border-purple-700 cursor-pointer">
                  {" "}
                  Change
                </div>
              </div>
              <div class=" w-full md:w-4/6 mt-3 md:mt-0 grid grid-cols-2 gap-4">
                <div class="col-span-1">
                  <div class="text-sm">First Name</div>
                  <input
                    type="text"
                    class="w-full bg-brand-bgGray rounded-md p-2"
                    value={userDetails.firstName}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="col-span-1">
                  <div class="text-sm">Last Name</div>
                  <input
                    type="text"
                    class="w-full bg-brand-bgGray rounded-md p-2"
                    value={userDetails.lastName}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="col-span-2">
                  Date of Birth
                  <input
                    type="date"
                    class="w-full bg-brand-bgGray rounded-md p-2"
                    value={userDetails.dob}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        dob: e.target.value,
                      })
                    }
                  />
                </div>

                <div class="col-span-2">
                  Phone Number
                  <input
                    type="text"
                    class="w-full bg-brand-bgGray rounded-md p-2"
                    value={userDetails.phone}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="col-span-2">
                  Address
                  <input
                    type="text"
                    class="w-full bg-brand-bgGray rounded-md p-2"
                    value={userDetails.address}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="col-span-2 flex justify-end">
                  <div
                    style={{ background: "#519BD0" }}
                    className="px-5 py-1 border-2 rounded-md  w-max text-white"
                  >
                    {" "}
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* account section */}
          <div class="   col-span-2 md:col-span-2  flex flex-col ">
            <div class="bg-white rounded-xl w-full p-4 flex flex-col">
              <span class="font-bold text-2xl font-montserrat">Account</span>
              <div className="my-3">
                Email
                <input
                  type="text"
                  class="w-full bg-brand-bgGray rounded-md p-2"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                />
              </div>
              <div className="my-3">
                Current Password
                <input
                  type="password"
                  class="w-full bg-brand-bgGray rounded-md p-2"
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                />
              </div>
              <div className="my-3">
                New Password
                <input
                  type="text"
                  class="w-full bg-brand-bgGray rounded-md p-2"
                  //   onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
                />
              </div>
              <div class="col-span-2 flex justify-end">
                <div
                  style={{ background: "#519BD0" }}
                  className="px-5 py-1 border-2 rounded-md  w-max text-white"
                >
                  {" "}
                  Save
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl my-4 w-full p-4 flex flex-col">
              <span class="font-bold font-montserrat">Secuirty</span>
              <div>2-Step Verification</div>
            </div>
            <div class="bg-white rounded-xl my-4 w-full p-4 flex flex-col">
              <span class="font-bold text-red-800 my-1 font-montserrat">
                Danger Zone
              </span>
              <div class="py-2 w-full text-center text-red-800 border-2 rounded-xl border-red-800">
                Delete My Account
              </div>
            </div>
          </div>

          <div class=" rounded-xl col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
