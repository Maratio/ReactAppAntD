import React from "react";
import { Button, Form, Input, Space } from "antd";
const SubmitButton = ({ form, children, closeModal }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button
      onClick={() => closeModal()}
      type="primary"
      htmlType="submit"
      disabled={!submittable}
    >
      {children}
    </Button>
  );
};

const FormLogin = ({ saveInfoLogin, closeModal }) => {
  const [formLogin] = Form.useForm();

  return (
    <Form
      form={formLogin}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      initialValues={{
        remember: true,
      }}
      onFinish={saveInfoLogin}
    >
      <Form.Item
        key="userName"
        name="userName"
        label="Имя пользователя"
        rules={[
          {
            required: true,
            message: "Введите имя пользователя!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        key="password"
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Введите пароль!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton closeModal={closeModal} form={formLogin}>
            Submit
          </SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
