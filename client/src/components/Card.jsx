import React from "react";
const Card = ({ children }) => {
  return (
    <div className="bg-[#fff] w-1/4 min-w-[400px] py-4 px-5 shadow-lg">
      <h1 className="text-center text-bold uppercase tracking-wider text-2xl mb-2">
        MERN TODO-LIST
      </h1>
      {children}
    </div>
  );
};

export default Card;
