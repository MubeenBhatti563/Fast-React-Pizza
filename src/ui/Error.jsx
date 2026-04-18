import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error">
      <h1>Something went wrong!</h1>
      <p>{error.data}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
