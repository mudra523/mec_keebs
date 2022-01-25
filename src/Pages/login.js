import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { isUserLoggedIn } from "../backend/auth";
import { signinUser } from "../backend/database";

function LogIn() {
  const [loginState, setLoginState] = useState(isUserLoggedIn());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    // console.log(e);
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      signIn();
    }
  };

  const signIn = async () => {
    const userDetails = {
      email: email,
      password: password,
    };
    await signinUser(userDetails).then((user) => {
      console.log("user",userDetails)
      if (user) {
        localStorage.setItem("uid", true);
        setLoginState(true);
        console.log(user);
        window.dispatchEvent(new Event("storage"));
        localStorage.setItem("loginState", true);
      } else {
        alert("Incorrect Email or Password");
      }
    });
  };

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
  };

  const validatePassword = () => {
    if (password.length >= 6) return true;
    return false;
  };

  if (loginState) {
    window.location.replace("/");
  }

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <p className="md:text-5xl text-3xl font-semibold lg:pt-28 lg:px-10 pt-20 px-6">
        Log In
      </p>
      <div className="flex max-w-md pt-4 lg:pt-12 px-6">
        <form onSubmit={handleSignin} action="#" method="POST">
          <div className="overflow-hidden shadow-sm border sm:rounded">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 px-2 block w-full h-10 border sm:text-sm border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 px-2 block w-full h-10 border sm:text-sm border-gray-300 rounded"
                  />
                </div>

                <div>
                  <Link
                    to="../sign-up"
                    className="text-base text-gray-800 font-medium"
                  >
                    Don 't have an account?
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
