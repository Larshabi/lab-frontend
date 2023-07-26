import React from "react";
import BackButton from "../Components/BackButton";
import TestResultItem from "../Components/TestResultItem";
import { Empty, Form } from "antd";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import LocationResultsItem from "../Components/LocationResultsItem";
import { useLocation, useParams } from "react-router-dom";
import { useGetTestDetailQuery, useSearchQuery } from "../app/services/labApi";

const TestNamePage = ({}) => {
  const { searchValue, category } = useLocation().state;
  const { data, isLoading } = useSearchQuery({ q: searchValue });
  console.log(data);
  console.log(category);

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
            {/* <h3 className=" capitalize">{`${
            } Test`}</h3> */}
            {/* <p>{data.length} results</p> */}
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
            {!data || !data.length ? (
              <Empty />
            ) : (
              data?.map((test) =>
                test.prices.map((testItem) => (
                  <TestResultItem
                    data={testItem}
                    key={testItem?.laboratory?.id}
                  />
                ))
              )
            )}

            {/* <LocationResultsItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestNamePage;
