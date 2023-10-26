import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-[1.2rem]">
      404 Not found!{" "}
      <Link to="/" className="mx-5 text-[var(--secondary-color)]">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
