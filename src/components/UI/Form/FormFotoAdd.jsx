import React from "react";
import { Button, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import SubmitButtonForm from "../Button/SubmitButtonForm";
import { addCard } from "../../../utils/fetch";
import { PATTERN_URL, PLACEHOLDER_URL } from "../../../utils/constants";

const card = "photos";

const FormFotoAdd = ({ closeModal }) => {
  const navigate = useNavigate();

  function addFoto({ Title, Img_url }) {
    addCard({Title, Img_url, navigate, card});
  }

  const [formAdd] = Form.useForm();
  return (
    <Form
      form={formAdd}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      initialValues={{
        remember: true,
      }}
      onFinish={addFoto}
    >
      <Form.Item
        name="Title"
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Img_url"
        label="Img_url"
        rules={[
          {
            required: true,
            pattern: PATTERN_URL,
          },
        ]}
      >
        <Input placeholder={PLACEHOLDER_URL} />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButtonForm closeModal={closeModal} form={formAdd}>
            Submit
          </SubmitButtonForm>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormFotoAdd;
