import React from "react";
import BackButton from "../Components/BackButton";
import { Form } from "antd";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import LocationResultsItem from "../Components/LocationResultsItem";
import { useLocation } from "react-router-dom";
import { useLocationSearchQuery } from "../app/services/labApi";
import TestItem from "../Components/TestItem";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const LaboratorySearchResultsPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
    // googleMapsApiKey: "YOUR_API_KEY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    console.log(bounds);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const { searchValue, category } = useLocation().state;

  const { data } = useLocationSearchQuery({ q: searchValue });

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
            <h3 className=" capitalize">{`${searchValue} Test`}</h3>
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
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            )}
          </div>
        </div>
        <div className="blood-results-right">
          <div className="header">
            <p>Search Results</p>
          </div>
          <div className="body">
            {category === "tests" &&
              data?.map((test) => <TestItem data={test} />)}

            {(category === "location" || category === "labName") &&
              data?.map((test) => <LocationResultsItem data={test} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboratorySearchResultsPage;
