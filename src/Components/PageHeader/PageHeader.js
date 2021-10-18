import React from "react";
import "./PageHeader.css";
const PageHeader = () => {
  return (
    <div className="page-header d-flex justify-content-center align-items-center text-center">
      <div>
        <h2>About US</h2>
        <h5>{`Home > About us`}</h5>
      </div>
    </div>
  );
};

export default PageHeader;
