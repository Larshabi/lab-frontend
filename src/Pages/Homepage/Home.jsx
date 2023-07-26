import { Button, FormControl } from "@chakra-ui/react";
import { Col, Form, Input, Row, Select } from "antd";
import React from "react";
import heroImg from "../../assets/Location search-rafiki 1.png";
import { Option } from "antd/es/mentions";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  console.log("object");
  const onfinish = (values) => {
    console.log(values);
    if (values.category === "location") {
      navigate("/location", { state: values });
    } else if (values.category === "testName") {
      navigate("/lab/tests", { state: values });
    } else {
      navigate("/search", { state: values });
    }
  };

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
            <Form onFinish={onfinish}>
              <Row gutter={4}>
                <Col span={17}>
                  <Form.Item name={"searchValue"}>
                    <Input placeholder="Search by laboratory name, location or test name" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item name={"category"}>
                    <Select
                      // style={{
                      //   width: 120,
                      // }}
                      placeholder="Search by laboratory name, city or test name"
                    >
                      <Option value="location">City</Option>
                      <Option value="tests">Test Category</Option>
                      <Option value="labName">Name of laboratory</Option>
                      <Option value="testName">Test Name</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Button backgroundColor={"#407BFF"} type="submit" color={"white"}>
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
