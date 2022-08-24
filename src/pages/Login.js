import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { stringify } from "postcss";
const Login = () => {
  // localStorage.setItem("signedInStat", false);
  // sing in or sign up stat
  const [signInStat, setSignInStat] = useState(true);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toggleSignInStat = () => {
    setSignInStat(!signInStat);
  };
  const [signedIn, setSignedIn] = useState(false);
  const fetchData = (details) => {
    if (details) {
      fetch("https://dummydata-bgco0wif2-richinrix.vercel.app/data.json")
        .then((res) => res.json())
        .then((data) => {
          const userFound = data.find((user) => user.email === details.email);
          console.log(userFound);
          if (userFound) {
            localStorage.setItem("signedInStat", true);
            localStorage.setItem("userDetails", JSON.stringify(userFound));
            window.location.href = "/dashboard";
          }
        });
    }
  };
  useEffect(() => {
    /*   global google */
    if (localStorage.getItem("signedInStat") === "true") {
      window.location.href = "/dashboard";
    }
    google.accounts.id.initialize({
      client_id:
        "178417619857-2dr5pf2vgpgq31c05s4rqp880761f024.apps.googleusercontent.com",
      callback: (response) => {
        const { credential, id_token } = response;

        const details = jwtDecode(credential);
        setUser({ ...user, email: details.email });

        localStorage.setItem("user", JSON.stringify(details));

        fetchData(details);

        localStorage.setItem("signedInStat", true);

        setSignedIn(true);
        console.log("first", details);

        setTimeout(() => {
          //   window.location.href = "/dashboard";
        }, 1000);

        // document.getElementById("signinDiv").hidden = true;
      },
    });
    google.accounts.id.renderButton(document.getElementById("my-signinDiv"), {
      theme: "outline",
      size: "large",
      longtitle: true,
      type: "standard",
      text: "Sign in with Google",
      scope: "profile email",
      fetch_basic_profile: true,
      prompt_parent_id: "my-signinDiv",
    });
    google.accounts.id.prompt();
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log({ user });
    if (user.email !== "" && user.password !== "") fetchData(user);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(user);
    if (
      user.email !== "" &&
      user.password !== "" &&
      user.confirmPassword == user.password &&
      user.firstName !== "" &&
      user.lastName !== ""
    )
      //   window.location.href = "/dashboard";
      console.log("signing up");
  };

  const signIn = () => (
    <>
      <div class="w-full ">
        <span className=" font-bold text-4xl">Sign In </span>
        <br /> <span class="text-base">Sign in to your account</span>
      </div>

      <div class="w-full flex items-center justify-between">
        <div class="w-1/2 pr-2">
          <div
            // className="w-full flex cursor-pointer my-2 text-gray-500 justify-center items-center rounded-xl px-2 bg-white py-1 "
            id="my-signinDiv"
            onClick={() => {
              /*  global google */
              //   google.accounts.id.prompt();
            }}
          >
            <img
              src={"https://www.pngrepo.com/png/355037/180/google.png"}
              className="w-4 h-4 mr-3"
              alt=""
            />
            Sign in with Google
          </div>
        </div>
        <div class="pl-1 w-1/2">
          <div className="w-full flex cursor-pointer my-2 text-gray-500 justify-center items-center rounded-md border-2 px-2 bg-white py-1">
            <img
              src={
                "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-antivirus-software-policy-library-and-information-34.png"
              }
              className="w-4 h-4 mr-3"
              alt=""
            />
            Sign in with Apple
          </div>
        </div>
      </div>
      <div class="bg-white w-full  my-4 rounded-xl flex-col flex p-4">
        <form className="flex flex-col my-2">
          <div>Email</div>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="text"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            class="my-1 px-2 py-1 outline-none bg-brand-bgGray w-full rounded-lg"
          />
        </form>
        <div className="flex flex-col my-2">
          <div>Password</div>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
            spellcheck={false}
            class="my-1 px-2 py-1 outline-none bg-brand-bgGray w-full rounded-lg"
          />
        </div>
        <div class="text-blue-500 my-2">Forgot Password?</div>
        <div
          onClick={(e) => handleSignIn(e)}
          class="my-2 text-white font-bold bg-brand-darkBlue rounded-lg cursor-pointer py-2 text-center w-full"
        >
          Sign In
        </div>
      </div>
      <div class="my-2">
        <span class="text-gray-500">Don't have an account? </span>
        <span
          onClick={(e) => toggleSignInStat(e)}
          className="text-blue-500 cursor-pointer"
        >
          Register here
        </span>
      </div>
    </>
  );
  const signUp = () => (
    <>
      <div class="w-full ">
        <span className=" font-bold text-4xl">Sign Up </span>
        <br /> <span class="text-base">Make your account</span>
      </div>

      <div class="w-full flex items-center justify-between">
        {/* <div
              className="w-1/2 flex  my-2 rounded-xl pr-1"
              id="my-signinDiv"
            ></div> */}
        <div class="w-1/2 pr-2">
          <div
            className="w-full flex cursor-pointer my-2 text-gray-500 justify-center items-center rounded-xl px-2 bg-white py-1 "
            //   id="my-signinDiv"
            onClick={() => {
              //   /*  global google */
              google.accounts.id.prompt();
            }}
          >
            <img
              src={"https://www.pngrepo.com/png/355037/180/google.png"}
              className="w-4 h-4 mr-3"
              alt=""
            />
            Sign Up with Google
          </div>
        </div>
        <div class="pl-1 w-1/2">
          <div className="w-full flex cursor-pointer my-2 text-gray-500 justify-center items-center rounded-xl px-2 bg-white py-1">
            <img
              src={
                "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-antivirus-software-policy-library-and-information-34.png"
              }
              className="w-4 h-4 mr-3"
              alt=""
            />
            Sign Up with Apple
          </div>
        </div>
      </div>
      <form class="bg-white w-full  my-4 rounded-xl flex-col flex p-4">
        <div class="flex w-full justify-between">
          <div className="flex w-1/2 flex-col my-2 pr-2">
            <div>First Name</div>
            <input
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              type="text"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              class="my-1 px-2 py-1 outline-none bg-brand-bgGray w-full rounded-lg"
            />
          </div>
          <div className="flex w-1/2 flex-col my-2">
            <div>Last Name</div>
            <input
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              type="text"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              class="my-1 px-2 py-1 outline-none bg-brand-bgGray w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col my-2">
          <div>Email</div>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="text"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            class="my-1 px-2 py-1 outline-none bg-brand-bgGray w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col my-2">
          <div>Password</div>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            required
            spellcheck={false}
            //   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            class="my-1 px-2 py-1 outline-none bg-brand-bgGray w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col my-2">
          <div>Confirm Password</div>
          <input
            type="text"
            required
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            spellcheck={false}
            //   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            class={`${
              user.confirmPassword == user.password
                ? ""
                : "border-red-500 border-2"
            } my-1 px-2 py-1 outline-none bg-brand-bgGray w-full rounded-lg`}
          />
        </div>
        <div
          onClick={(e) => handleSignUp(e)}
          class="my-2 text-white font-bold bg-brand-darkBlue rounded-lg cursor-pointer py-2 text-center w-full"
        >
          Sign Up
        </div>
      </form>
      <div class="my-2">
        <span class="text-gray-500">Have an account? </span>
        <span
          class="text-blue-500 cursor-pointer"
          onClick={() => setSignInStat(true)}
        >
          Sign In
        </span>
      </div>
    </>
  );
  return (
    <div className="min-h-screen w-full flex ">
      <div class="w-1/3 bg-brand-darkBlue  flex items-center justify-center text-7xl text-white font-bold tracking-wider">
        Dash.
      </div>
      <div class="w-2/3 bg-brand-bgGray  flex flex-col items-center justify-center md:px-64">
        {signInStat ? signIn() : signUp()}
      </div>
    </div>
  );
};

export default Login;
