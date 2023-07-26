import React from "react";
import BackButton from "../Components/BackButton";
import { Empty } from "antd";
import { Button } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { useGetLaboratoryTestsQuery } from "../app/services/labApi";
import TestItem from "../Components/TestItem";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 7.490997775233809,
  lng: 4.541029218025413,
};

const LocationResults = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.googleMapsApiKey
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const { id } = useParams();
  const { name, lat, lng } = useLocation().state;
  const { data, isLoading } = useGetLaboratoryTestsQuery(id);
  console.log(lat, lng);

  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="search">
      <div>
        <BackButton />
      </div>

      <div className="search_container">
        <div className="blood-results_left">
          <div className="header">
            {/* <h3 className=" capitalize">{`${searchValue} Test`}</h3> */}
            <p>{data?.length} results</p>
          </div>
          <div className="body">
            {/* <p>Make another search</p>
            <Form onFinish={onFinish}>
              <Form.Item name={"searchTest"}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FiSearch color="gray.300" />
                  </InputLeftElement>
                  <Input type="tel" placeholder="Search test" />
                </InputGroup>
              </Form.Item>
            </Form> */}
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: lat, lng: lng }}
                zoom={10}
                // onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <MarkerF position={{ lat: lat, lng: lng }} />
              </GoogleMap>
            )}
            <Button
              backgroundColor={"#407BFF"}
              color={"white"}
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
                )
              }
              className="mx-auto mt-3"
            >
              Get Directions
            </Button>
          </div>
        </div>
        <div className="blood-results-right">
          <div className="header">
            <p className="font-bold">{!isLoading && name}</p>
          </div>
          <div className="body">
            {!data || !data.length ? (
              <Empty />
            ) : (
              data?.map((test) => <TestItem data={test} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationResults;
