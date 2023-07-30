import React from "react";
import { data } from "../data/data";

export default function Social() {
  return (
    <>
      <div className="social">
      <>
      <h2>Social</h2>
        {data.social.map((val, index) => (
          <>
            {val.namee} 
            {val.url} <br />
          </>
        ))}
      </>
      <div />
      </div>
    </>
  );
}
