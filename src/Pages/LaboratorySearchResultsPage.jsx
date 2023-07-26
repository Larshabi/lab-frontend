import React from "react";
import BackButton from "../Components/BackButton";
import { Form } from "antd";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import LocationResultsItem from "../Components/LocationResultsItem";
import { useLocation } from "react-router-dom";
import { useLocationSearchQuery } from "../app/services/labApi";
import TestItem from "../Components/TestItem";

const LaboratorySearchResultsPage = () => {
  const { searchValue, category } = useLocation().state;

  const { data } = useLocationSearchQuery({ q: searchValue });

  console.log(data);

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
            <p>Search Results</p>
          </div>
          <div className="body">
            {category === "tests" &&
              data?.map((test) => <TestItem data={test} />)}

            {category === "location" &&
              data?.map((test) => <LocationResultsItem data={test} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboratorySearchResultsPage;
