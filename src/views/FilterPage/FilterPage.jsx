import React from "react";
import { Button, Layout, Space } from "antd";
import Topbar from "../../components/Layout/Topbar/Topbar";
import { Counter } from "../../redux/features/counter/Counter";
import ScopeBusiness from "./ScopeBusiness";
import ScopeAccess from "./ScopeAccess";
const { Header, Footer, Content } = Layout;
import "./filterPage.css";
import AutoForm from "./Forms/AntDReduxFinalForm";
import { useSelector } from "react-redux";
import { getFormData } from "../../redux/features/forms/baseForm";
import FilterPageForm from "./Forms/FilterPageForm";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const showResults = async function showResults(values) {
  console.log(values);
  // await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};

export default function FilterPage() {
  const formVal = useSelector((state) => state.baseForms.example?.values);

  return (
    <Layout>
      <Header
        style={{ backgroundColor: "#fff", height: "110px", width: "100%" }}
      >
        {JSON.stringify(formVal, 0, 2)}
        <Topbar />
      </Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // t - R - b - L
          // margin: "90px 160px 90px 161px",
          width: "100%",
        }}
      >
        <Space>
          <ScopeBusiness />
        </Space>
        <Space>
          <ScopeAccess />
        </Space>
        <Space
          direction="horizontal"
          size={"small"}
          style={{ marginTop: "20px", marginLeft: "720px" }}
        >
          <Button
            type="default"
            style={{
              marginTop: "4px",
              borderRadius: "7px",
              background: "black",
              color: "white",
            }}
          >
            Next
          </Button>
        </Space>
        {/* <Space>
          <AutoForm />
        </Space> */}
        <Space>
          <FilterPageForm onSubmit={showResults} />
        </Space>
      </Content>
      {/* <Footer>
        <Space>
          <Counter />
        </Space>
      </Footer> */}
    </Layout>
  );
}
