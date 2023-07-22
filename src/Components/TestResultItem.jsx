import { Button } from "@chakra-ui/react";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const TestResultItem = () => {
  return (
    <div className="testresult">
      <div className="testresult-img">
        <img src="" alt="" />
      </div>
      <div className="testresult-details">
        <div className="testresult-details_title">
          <h3>Complete Blood Count (CBC)</h3>
          <p>DelRio Laboratories</p>
        </div>
        <div className="testresult-details_contact">
          <p className="mb-5">
            <span>
              <MdLocationPin />
            </span>
            120 Carlanna Lake Road, Ketchikan, AK 99901-5611
          </p>
          <p>
            <span>
              <BsFillTelephoneFill />
            </span>
            0800000000
          </p>
        </div>
      </div>
      <div className="testresult-price">
        <p>#20,000</p>
        <Button backgroundColor={"#407BFF"} color={"white"}>
          View Laboratory
        </Button>
      </div>
    </div>
  );
};

export default TestResultItem;
