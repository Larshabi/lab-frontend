import { Button } from "antd";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import png from "../assets/Rectangle 14.png";

const LocationResultsItem = () => {
  return (
    <div className="testresult">
      <div className="testresult-img">
        <img src={png} alt="" />
      </div>
      <div className="testresult-details">
        <div className="testresult-details_title">
          <h3>Quest Diagnostics</h3>
        </div>
        <div className="testresult-details_contact">
          <p className="mb-5">
            <span>
              <MdLocationPin />
            </span>
            120 Carlanna Lake Road, Ketchikan, AK 99901-5611
          </p>
          <p className="mb-5">
            <span>
              <BsFillTelephoneFill />
            </span>
            Quest Diagnostics
          </p>
          <p className="mb-5">
            <span>
              <BsFillTelephoneFill />
            </span>
            Mondays - Fridays, 8AM - 5PM
          </p>
        </div>
      </div>
      <div className="testresult-price">
        <Button backgroundColor={"#407BFF"} color={"white"}>
          View Tests
        </Button>
        <Button backgroundColor={"#407BFF"} color={"white"}>
          View Laboratory
        </Button>
      </div>
    </div>
  );
};

export default LocationResultsItem;
