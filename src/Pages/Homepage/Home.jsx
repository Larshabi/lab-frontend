import { Button, FormControl } from "@chakra-ui/react";
import { Col, Form, Input, Row, Select } from "antd";
import React from "react";
import heroImg from "../../assets/Location search-rafiki 1.png";
import { Option } from "antd/es/mentions";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <h3 className="hero_content-title">
          The Best <span className="text-blue">Online Directory </span>
          <br />
          to Find Laboratories
        </h3>
        <p className="hero_content-sub">
          Find laboratories near you, easy and fast.
        </p>
        <div className="hero-input">
          <p>Find a laboratory</p>
          <FormControl>
            <Form>
              <Row gutter={4}>
                <Col span={17}>
                  <Form.Item>
                    <Input placeholder="Search by laboratory name, location or test name" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item>
                    <Select
                      // style={{
                      //   width: 120,
                      // }}
                      placeholder="Search by laboratory name, city or test name"
                    >
                      <Option value="city">City</Option>
                      <Option value="test_name">Test Name</Option>
                      <Option value="test_category">Test Category</Option>
                      <Option value="labName">Name of laboratory</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Button backgroundColor={"#407BFF"} color={"white"}>
                Find Laboratory
              </Button>
            </Form>
          </FormControl>
        </div>
      </div>
      <div className="hero_img">
        <img src={heroImg} alt="banner-img" />
      </div>
    </div>
  );
};

export default Home;
