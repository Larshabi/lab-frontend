import React from "react";
import { useNavigate } from "react-router-dom";

const TestItem = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="testresult"
      onClick={() => navigate(`/search/tests/${data?.id}`)}
    >
      <div className="testresult-details">
        <div className="testresult-details_title">
          <h3>{data.name}</h3>
          <p>{data?.category.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestItem;
