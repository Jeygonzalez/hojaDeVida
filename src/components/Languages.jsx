import React from "react";
import { data } from "../data/data";

export default function Languages() {
  return (
    <>
      <div className="languages">
      <>
      <h2>Languages</h2>
        {data.languages.map((val, index) => (
          <>
            {val.name} <br />
            {val.percentage} <br />
            <br />
          </>
        ))}
      </>
      <div />
      </div>
    </>
  );
}
