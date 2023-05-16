import React from "react";
import { Typography, Row, Col, Select, Button, Space } from "antd";
export default function ScopeBusiness() {
  return (
    <Space direction="vertical" size={"small"}>
      <Typography.Title level={5} strong className="typography-title-header">
        Choose the scope of your business
      </Typography.Title>

      <Space direction="vertical" size={"small"}>
        <Row>
          <Space className="scope-filters">
            <Typography.Title
              style={{ margin: "0px 0px 0px 10px", fontSize: "12px" }}
            >
              BOP Version
            </Typography.Title>
            <Col span={13} style={{ margin: "0px 10px 0px 10px" }}>
              <Select defaultValue="All" style={{ width: 170 }}>
                <Select.Option value="All">All</Select.Option>
                <Select.Option value="Online">Online</Select.Option>
                <Select.Option value="Offline">Offline</Select.Option>
              </Select>
            </Col>
          </Space>

          <Space className="scope-filters">
            <Typography.Title
              style={{ margin: "0px 0px 0px 10px", fontSize: "12px" }}
            >
              Region
            </Typography.Title>
            <Col span={11} style={{ margin: "0px 10px 0px 10px" }}>
              <Select defaultValue="US" style={{ width: 170 }}>
                <Select.Option value="EU">EU</Select.Option>
                <Select.Option value="US">US</Select.Option>
                <Select.Option value="IN">IN</Select.Option>
              </Select>
            </Col>
          </Space>

          <Space className="scope-filters">
            <Typography.Title
              style={{ margin: "0px 0px 0px 10px", fontSize: "12px" }}
            >
              Market
            </Typography.Title>
            <Col span={11} style={{ margin: "0px 10px 0px 10px" }}>
              <Select defaultValue="NA" style={{ width: 170 }}>
                <Select.Option value="CD">CD</Select.Option>
                <Select.Option value="NA">NA</Select.Option>
                <Select.Option value="SA">SA</Select.Option>
              </Select>
            </Col>
          </Space>
        </Row>
        <Row>
          <Space className="scope-filters">
            <Typography.Title
              style={{ margin: "0px 0px 0px 10px", fontSize: "12px" }}
            >
              RBU
            </Typography.Title>
            <Col span={13} style={{ margin: "0px 10px 0px 10px" }}>
              <Select defaultValue="All" style={{ width: 170 }}>
                <Select.Option value="All">All</Select.Option>
                <Select.Option value="AAA">AAA</Select.Option>
                <Select.Option value="BBB">BBB</Select.Option>
              </Select>
            </Col>
          </Space>

          <Space className="scope-filters">
            <Typography.Title
              style={{ margin: "0px 0px 0px 10px", fontSize: "12px" }}
            >
              Category
            </Typography.Title>
            <Col span={11} style={{ margin: "0px 10px 0px 10px" }}>
              <Select defaultValue="AAA" style={{ width: 170 }}>
                <Select.Option value="AAA">AAA</Select.Option>
                <Select.Option value="BBB">BBB</Select.Option>
                <Select.Option value="CCC">CCC</Select.Option>
              </Select>
            </Col>
          </Space>

          <Space className="scope-filters">
            <Typography.Title
              style={{ margin: "0px 0px 0px 10px", fontSize: "12px" }}
            >
              Brand
            </Typography.Title>
            <Col span={11} style={{ margin: "0px 10px 0px 10px" }}>
              <Select defaultValue="TIDE" style={{ width: 170 }}>
                <Select.Option value="TIDE">TIDE</Select.Option>
                <Select.Option value="ZZZ">ZZZ</Select.Option>
                <Select.Option value="YYY">YYY</Select.Option>
              </Select>
            </Col>
          </Space>
          <Space direction="horizontal" size={"small"}>
            <Button
              type="default"
              style={{
                marginTop: "4px",
                marginLeft: "36px",
                marginRight: "12px",
                borderRadius: 0,
              }}
            >
              Clear All
            </Button>
            <Button
              type="default"
              style={{
                marginTop: "4px",
                borderRadius: "7px",
                background: "black",
                color: "white",
              }}
            >
              Apply
            </Button>
          </Space>
        </Row>
      </Space>
    </Space>
  );
}
