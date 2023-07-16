import React from "react";
import BackButton from "../Components/BackButton";
import TestResultItem from "../Components/TestResultItem";
import { Form } from "antd";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const SearchResults = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="search">
      <BackButton />

      <div className="search_container">
        <div>
          <div>
            <h3>Blood Test</h3>
            <p>20 results</p>
          </div>
          <div>
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
        <div>
          <div>
            <p>Search Results</p>
          </div>
          <div>
            <TestResultItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
