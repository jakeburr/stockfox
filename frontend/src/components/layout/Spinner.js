import React from "react";
import spinner from "../../assets/spinner.gif";


export default function Spinner(){
  return (
    <div>
      <img
        src={spinner}
        alt="Loading.."
        style={{ width: "225px", margin: "35px auto", display: "block" }}
      />
    </div>
  );
};
