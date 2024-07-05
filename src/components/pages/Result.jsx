/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { ResultTable } from "./ResultTable";
import "./Result.css";
export const Result = ({ response }) => {
  return (
    <div>
      <h2 className="heading">Probability of Injury</h2>
      <ResultTable response={response} />
    </div>
  );
};
