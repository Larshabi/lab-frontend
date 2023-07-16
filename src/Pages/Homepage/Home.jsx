import { Button, FormControl } from "@chakra-ui/react";
import { Form, Input } from "antd";
import React from "react";
import heroImg from "../../assets/Location search-rafiki 1.png";

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
              <Form.Item>
                <Input placeholder="Search by laboratory name, location or test name" />
              </Form.Item>
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
