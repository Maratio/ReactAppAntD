import React from "react";
import { Button, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../../constants";
import SubmitButtonForm from "../Button/SubmitButtonForm";

const FormPostAdd = ({ closeModal }) => {
  const navigate = useNavigate();

  const saveInfoAddPost = ({ Title, Description, Img_url }) => {
    fetch(`${BACKEND_URL}/api/posts?`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: Title,
        body: Description,
        url: Img_url,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          navigate("/posts");
        }
      })
      .catch((err) => console.error("error >>>>>", err));
  };

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
      onFinish={saveInfoAddPost}
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
        name="Description"
        label="Description"
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
          },
        ]}
      >
        <Input />
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

export default FormPostAdd;
