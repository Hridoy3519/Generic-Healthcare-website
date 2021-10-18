import React from "react";
import "./PageHeader.css";
const PageHeader = (props) => {
  return (
    <div className="page-header d-flex justify-content-center align-items-center text-center">
      <div>
        <h2>{props.page}</h2>
        <h5>{`Home > ${props.page}`}</h5>
      </div>
    </div>
  );
};

export default PageHeader;
