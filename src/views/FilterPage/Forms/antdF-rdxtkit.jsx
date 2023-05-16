import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateFormValues } from "../../../redux/features/forms/form";

const MyForm = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(updateFormValues(values));
    // form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[
          {
            required: true,
            message: "Please input your last name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
