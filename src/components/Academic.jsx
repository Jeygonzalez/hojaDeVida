import React from "react";
import { data } from "../data/data";

export default function Academic() {
  return (
    <>
      <div className="academic">
        {data.Academic.map((val, index) => (
          <>
          <h2>Academic</h2>
            {val.degree} <br />
            {val.description} <br />
            {val.institution} <br />
            {val.endDate} <br />
            {val.startDate}
          </>
        ))}
      </div>
    </>
  );
}
