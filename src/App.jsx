import { Link, Route, Routes } from "react-router-dom";
import Loged from "./components/Loged";
import { useState } from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <section className="flex flex-col container max-w-[1300px] ml-auto mr-auto pt-4">
      <div className="navbar bg-primary text-primary-content rounded-xl flex justify-between shadow-xl shadow-gray-300">
        <Link to={"/"} className="btn btn-ghost text-xl font-bold">
          Home
        </Link>
        <div className="flex gap-3">
          {!localStorage.getItem("boolean") && (
            <>
              <Link
                to="/logIn"
                className="btn btn-outline text-white hover:bg-zinc-100 hover:text-yellow-950"
              >
                Log in
              </Link>
              <Link
                to="/signUp"
                className="btn text-yellow-50 bg-slate-800  hover:bg-zinc-100 hover:text-yellow-950"
              >
                Sign Up
              </Link>
            </>
          )}
          {localStorage.getItem("boolean") && (
            <button
              onClick={() => {
                localStorage.removeItem("boolean");
              }}
              className="btn text-yellow-50 bg-slate-800  hover:bg-zinc-100 hover:text-yellow-950"
            >
              log out
            </button>
          )}
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center min-h-[500px] h-full max-w-[1300px] shadow-2xl shadow-gray-500 mt-4 rounded-xl text-3xl sm:text-6xl lg:text-9xl text-blue-400 font-bold">
              Google auth
            </div>
          }
        ></Route>
        <Route path="/loged" element={<Loged></Loged>}></Route>
        {!localStorage.getItem("boolean") && (
          <>
            <Route path="/signUp" element={<SignUp></SignUp>}></Route>
            <Route path="/logIn" element={<LogIn></LogIn>}></Route>
          </>
        )}
      </Routes>
    </section>
  );
}

export default App;
