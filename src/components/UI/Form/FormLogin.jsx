import React from "react";
import { Button, Form, Input, Space } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../castomHooks/useAuth.js";
import SubmitButtonForm from "../Button/SubmitButtonForm.jsx";

const FormLogin = ({ closeModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/";

  const saveInfoLogin = ({ userName }) => {
    auth.signin(userName, () => {
      navigate(from, { replace: true });
    });
  };

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
          <SubmitButtonForm closeModal={closeModal} form={formLogin}>
            Submit
          </SubmitButtonForm>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
