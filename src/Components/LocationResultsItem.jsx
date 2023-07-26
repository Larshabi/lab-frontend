import { Button } from "antd";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import png from "../assets/Rectangle 14.png";
import { useNavigate } from "react-router-dom";

const LocationResultsItem = ({ data }) => {
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="testresult">
      <div className="testresult-img">
        <img src={png} alt="" />
      </div>
      <div className="testresult-details">
        <div className="testresult-details_title">
          <h3>{data?.laboratory?.name || data?.name}</h3>
        </div>
        <div className="testresult-details_contact">
          <p className="mb-5">
            <span>
              <MdLocationPin />
            </span>
            {data?.laboratory?.address || data?.address}
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
        <Button
          backgroundColor={"#407BFF"}
          color={"white"}
          onClick={() =>
            navigate(`/location/tests/${data?.laboratory?.id || data?.id}`)
          }
        >
          View Tests
        </Button>
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

export default LocationResultsItem;
