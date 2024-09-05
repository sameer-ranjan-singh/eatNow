import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

const UserName = () => {
  const { myName = "Sameer", setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="h-screen text-end flex justify-center flex-col items-center gap-2 ">
      {myName && <h1 className="text-center md:text-3xl md:font-extrabold font-extrabold bold text-2xl capitalize mb-10 ">
        Welcome {myName} !
      </h1>}
      <div className="">
        <input
          className="p-2 font-bold my-2 capitalize shadow-lg"
          onChange={(e) => setUserName(e.target.value)}
          value={myName}
          placeholder="Enter your Name..."
        />
        <button
          onClick={() => navigate("/browse")}
          className="bg-orange-500 p-2 font-bold my-2 shadow-lg"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default UserName;
