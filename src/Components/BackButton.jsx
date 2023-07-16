import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className="back_btn">
      <ArrowLeftOutlined /> Go Back
    </div>
  );
};

export default BackButton;
