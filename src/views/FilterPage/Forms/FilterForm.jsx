import React from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import {
  updateBaseForm,
  selectForm,
  getFormData,
} from "./../../../redux/features/forms/baseForm";
import { Space, Button, Form as AForm, Input } from "antd";

const FormStateToRedux = ({ form }) => {
  const dispatch = useDispatch();
  const updateForm = (form, state) => {
    dispatch(updateBaseForm({ form, state }));
  };
  return <FormSpy onChange={(state) => updateForm(form, state)} />;
};

const FormStateFromRedux = ({ form }) => {
  const formValue = useSelector((state) => selectForm(state, form));
  return <Space>{JSON.stringify(formValue, 0, 2)}</Space>;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

// include antdform here
const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    initialValues={{ name: "Phudit", age: 18 }}
    subscription={{ submitting: true, pristine: true }}
  >
    {({ handleSubmit, form, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <FormStateToRedux form="example" />
        <div>
          <label>Name</label>
          <Field name="name" component="input" type="text" placeholder="name" />
        </div>
        <div>
          <label>Age</label>
          <Field name="age" component="input" type="number" placeholder="age" />
        </div>
        <div>
          <Field name="submit" component={Button} type="submit" />
        </div>
        <FormStateFromRedux form="" />
      </form>
    )}
  </Form>
);

export default MyForm;
