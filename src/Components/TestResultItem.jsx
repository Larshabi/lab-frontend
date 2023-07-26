import { Button } from "@chakra-ui/react";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import png from "../assets/Rectangle 14 (1).png";

const TestResultItem = ({ data }) => {
  return (
    <div className="testresult px-4">
      <div className="testresult-img">
        <img src={png} alt="" />
      </div>
      <div className="testresult-details">
        <div className="testresult-details_title">
          <h3>{data.name}</h3>
          <p>{data?.laboratory?.name}</p>
        </div>
        <div className="testresult-details_contact">
          <p className="mb-5">
            <span>
              <MdLocationPin />
            </span>
            {data?.laboratory?.address}
          </p>
          <p>
            <span>
              <BsFillTelephoneFill />
            </span>
            {data?.laboratory?.phone}
          </p>
        </div>
      </div>
      <div className="testresult-price mr-3">
        <p>{`₦ ${data?.price}`}</p>
        <Button
          backgroundColor={"#407BFF"}
          color={"white"}
          onClick={() =>
            window.open(
              `https://www.google.com/maps/dir/?api=1&destination=${data?.laboratory?.latitude},${data?.laboratory?.longitude}`
            )
          }
        >
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default TestResultItem;
