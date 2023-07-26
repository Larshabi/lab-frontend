import React from "react";
import BackButton from "../Components/BackButton";
import TestResultItem from "../Components/TestResultItem";
import { Button, Empty, Form } from "antd";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import LocationResultsItem from "../Components/LocationResultsItem";
import { useLocation, useParams } from "react-router-dom";
import {
  useGetLaboratoryTestsQuery,
  useSearchQuery,
} from "../app/services/labApi";
import TestItem from "../Components/TestItem";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const LocationResults = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBScqAAul-87gJk0DcDP_OueeTrJEJWeLw",
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

  const { id } = useParams();
  const name = useLocation().state;
  const { data, isLoading } = useGetLaboratoryTestsQuery(id);

  //   let newArr;
  //   if (data) {
  //     newArr = data
  //       .map((item) => {
  //         return item.prices;
  //       })
  //       .flat()
  //       .filter((item) => item?.laboratory?.city.toLowerCase() === "ife");
  //     console.log(newArr);
  //   }

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
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Child components, such as markers, info windows, etc. */}
                {/* {props.isMarkerShown && */}
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
                {/* // }<></> */}
              </GoogleMap>
            )}
            <Button
              backgroundColor={"#407BFF"}
              color={"white"}
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/dir/?api=1&destination=${
                    data?.laboratory?.latitude || data?.latitude
                  },${data?.laboratory?.longitude || data.longitude}`
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
