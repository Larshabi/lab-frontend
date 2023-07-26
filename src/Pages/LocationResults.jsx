import React from "react";
import BackButton from "../Components/BackButton";
import TestResultItem from "../Components/TestResultItem";
import { Form } from "antd";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import LocationResultsItem from "../Components/LocationResultsItem";
import { useLocation, useParams } from "react-router-dom";
import {
  useGetLaboratoryTestsQuery,
  useSearchQuery,
} from "../app/services/labApi";
import TestItem from "../Components/TestItem";

const LocationResults = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetLaboratoryTestsQuery(id);
  console.log(data);

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
            <p>Make another search</p>
            <Form onFinish={onFinish}>
              <Form.Item name={"searchTest"}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FiSearch color="gray.300" />
                  </InputLeftElement>
                  <Input type="tel" placeholder="Search test" />
                </InputGroup>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="blood-results-right">
          <div className="header">
            <p className="font-bold">
              {!isLoading && data[0]?.prices[0]?.laboratory?.name}
            </p>
          </div>
          <div className="body">
            {data?.map((test) => (
              <TestItem data={test} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationResults;
