import { Form, Field, FormSpy } from "react-final-form";
import { Form as AntdForm, Button, Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBaseForm,
  selectForm,
  getFormData,
} from "../../../redux/features/forms/baseForm";
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

const onSubmit = async (form, values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
  FormStateToRedux({ form });
};

const AntdReduxFinalForm = () => {
  const [form] = AntdForm.useForm();
  const dispatch = useDispatch();
  const formName = "example";
  // const formValues = useSelector((state) => selectForm(state, formName));
  //alternate
  const formValues = getFormData(formName);

  // follow here
  return (
    <>
      <p>it's with antd react final form and toolkit</p>
      <Form
        onSubmit={onSubmit}
        initialValues={formValues}
        subscription={{ submitting: true, pristine: true }}
      >
        {({ handleSubmit, submitting, pristine }) => (
          <AntdForm
            form={form}
            onSubmit={handleSubmit}
            // onFinish={onFinish}
            //!SECTION//
          >
            <FormStateToRedux form={formName} />
            <Field name="firstName">
              {({ input }) => (
                <AntdForm.Item label="First Name">
                  <Input {...input} placeholder="Enter your first name" />
                </AntdForm.Item>
              )}
            </Field>
            <Field name="lastName">
              {({ input }) => (
                <AntdForm.Item label="Last Name">
                  <Input {...input} placeholder="Enter your last name" />
                </AntdForm.Item>
              )}
            </Field>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            {/* <FormStateFromRedux form={formName} /> */}
          </AntdForm>
        )}
      </Form>
    </>
  );
};

export default AntdReduxFinalForm;
