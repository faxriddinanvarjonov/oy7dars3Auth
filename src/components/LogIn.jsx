import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  let Username = useRef("");
  let Password = useRef("");
  let Email = useRef("");
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let card = {
      username: Username?.current?.value,
      email: Email?.current?.value,
      password: Password?.current?.value,
    };
    console.log(card);
    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("boolean", true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-[1000px] flex flex-col items-center gap-3 mt-3 justify-center ml-auto mr-auto"
    >
      <label className="input input-bordered flex items-center gap-2 w-[200px] sm:w-[500px] h-[80px] text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-8 h-8 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          ref={Username}
          type="text"
          className="grow"
          placeholder="Username"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-[200px] sm:w-[500px] h-[80px] text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-8 h-8 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input ref={Email} type="text" className="grow" placeholder="Email" />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-[200px] sm:w-[500px] h-[80px] text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-8 h-8 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          ref={Password}
          type="password"
          className="grow"
          placeholder="password"
        />
      </label>
      <button className="btn w-40 bg-green-500 text-yellow-50 text-lg font-bold shadow-xl hover:text-blue-950">
        Submit
      </button>
    </form>
  );
}

export default LogIn;
