import React from "react";
import { Avatar, Typography, Divider } from "antd";
import "./topbar.css";
import LightHouse from "../../../assets/lighthouse-logo.png";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <Avatar
          className="topbar-avatar"
          shape="circular"
          size={74}
          src={LightHouse}
          alt="logo"
          style={{
            borderColor: "red",
          }}
        />
        <div>
          <Typography.Title
            className="topbar-text"
            level={4}
            style={{
              lineHeight: "1",
              marginLeft: "50px",
            }}
          >
            Welcome To
          </Typography.Title>
          <Typography.Title
            className="topbar-text"
            level={4}
            style={{
              lineHeight: "1",
              marginTop: "0px",
              marginLeft: "50px",
            }}
          >
            Consumption Forecast Advisor!!
          </Typography.Title>
        </div>
      </div>
      <Divider
        style={{
          backgroundColor: "white",
          width: "100px",
          height: "50px",
          boxShadow: "0 20px 20px -20px #333",
          margin: "-54px 0px 0px 10px",
          borderTop: "0px solid #333",
        }}
      />
    </>
  );
}
