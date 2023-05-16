import { Space, Typography, Table, Button } from "antd";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function ScopeAccess() {
  const typeOfBusiness = "Fabric Care";
  const typeOfAccess = `You have edit access to ${typeOfBusiness}`;
  const _delete = (record) => {
    console.log(record);
  };
  const columns = [
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
      width: "07%",
    },
    {
      title: "Market",
      dataIndex: "market",
      key: "market",
      sorter: (a, b) => a.name > b.name,
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
    {
      title: "BOP Version",
      dataIndex: "bopVersion",
      key: "bopVersion",
      width: "10%",
    },
    {
      title: "RBU",
      dataIndex: "rbu",
      key: "rbu",
      sorter: (a, b) => a.name > b.name,
      sortDirections: ["descend", "ascend"],
      width: "12%",
    },
    {
      title: "Consumptions",
      dataIndex: "consumptions",
      key: "consumptions",
      sorter: (a, b) => a.name > b.name,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Shipment",
      dataIndex: "shipment",
      key: "shipment",
      width: "15%",
    },
    {
      title: "BB Updated",
      dataIndex: "buildingBlockUpdated",
      key: "buildingBlockUpdated",
      sorter: (a, b) => a.name > b.name,
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
    // {
    //   key: "action",
    //   title: "Actions",
    //   render: (record) => {
    //     return (
    //       <>
    //         <AiOutlineDelete
    //           style={{ color: "red" }}
    //           onClick={() => _delete(record)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];
  const dataSource = [
    {
      key: "1",
      region: "US",
      market: "NA",
      bopVersion: "April-23",
      rbu: "Fabric Care",
      consumptions: "(Actual) 2Ton",
      shipment: "(Actual) 1.7Ton",
      buildingBlockUpdated: "23/04/2023",
    },
    {
      key: "2",
      region: "US",
      market: "CD",
      bopVersion: "April-23",
      rbu: "Fabric Care",
      consumptions: "(Actual) 2Ton",
      shipment: "(Actual) 1.7Ton",
      buildingBlockUpdated: "11/04/2023",
    },
    {
      key: "3",
      region: "US",
      market: "NA",
      bopVersion: "April-23",
      rbu: "Fabric Care",
      consumptions: "(Actual) 2Ton",
      shipment: "(Actual) 1.7Ton",
      buildingBlockUpdated: "23/04/2023",
    },
    {
      key: "4",
      region: "US",
      market: "NA",
      bopVersion: "April-23",
      rbu: "Fabric Care",
      consumptions: "(Actual) 2Ton",
      shipment: "(Actual) 1.7Ton",
      buildingBlockUpdated: "23/04/2023",
    },
    {
      key: "5",
      region: "US",
      market: "NA",
      bopVersion: "April-23",
      rbu: "Fabric Care",
      consumptions: "(Actual) 2Ton",
      shipment: "(Actual) 1.7Ton",
      buildingBlockUpdated: "23/04/2023",
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return (
    <div>
      <Space
        direction="vertical"
        style={{
          backgroundColor: "#E5E5E5",
          marginTop: "40px",
          height: "260px",
          padding: "06px",
        }}
      >
        <Typography.Title
          level={5}
          strong
          style={{ fontSize: "13px", marginLeft: "12px", marginTop: "5px" }}
        >
          Access to Scope: {typeOfAccess}
        </Typography.Title>
        <Table
          columns={columns}
          dataSource={dataSource}
          // rowSelection={rowSelection}
          pagination={{
            pageSize: 4,
            position: "bottomCenter",
            // showSizeChanger: true,
          }}
          bordered
          scroll={{ y: 110, x: 110 }}
          size="small"
          style={{
            padding: "5px",
            fontSize: "12px",
            marginTop: "-12px",
            width: "850px",
            overflow: "hidden",
          }}
        />
      </Space>
    </div>
  );
}
