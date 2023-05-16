import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Input, Radio, Select, Checkbox, Button, DatePicker } from "antd";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const makeField =
  (Component) =>
  ({ input, meta, children, hasFeedback, label, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    return (
      <FormItem
        {...formItemLayout}
        label={label}
        validateStatus={hasError ? "error" : "success"}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
      >
        <Component {...input} {...rest} children={children} />
      </FormItem>
    );
  };

const AInput = makeField(Input);
const ARadioGroup = makeField(RadioGroup);
const ASelect = makeField(Select);
const ACheckbox = makeField(Checkbox);
const ATextarea = makeField(TextArea);
const ARangePicker = makeField(RangePicker);

export {
  AInput,
  ARadioGroup,
  ASelect,
  ACheckbox,
  ATextarea,
  ARangePicker,
  makeField,
};
