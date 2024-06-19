import React from "react";
import { Button, Form, Input, Space } from "antd";
import { BACKEND_URL } from "../../../constants";
import { useNavigate} from "react-router-dom";
import SubmitButtonForm from "../Button/SubmitButtonForm";


const FormPostUpdate = ({ closeModal, id }) => {
  const navigate = useNavigate();
  const [formUpdate] = Form.useForm();

  const updatePost = ({ Title, Description }) => {
    fetch(`${BACKEND_URL}/api/posts/${id}?`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: Title,
        body: Description,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          navigate(`/posts/${id}`);
        }
      })
      .catch((err) => console.error("error >>>>>", err));
  };

  return (
    <Form
      form={formUpdate}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      initialValues={{
        remember: true,
      }}
      onFinish={updatePost}
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
      <Form.Item>
        <Space>
          <SubmitButtonForm closeModal={closeModal} form={formUpdate}>
            Submit
          </SubmitButtonForm>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormPostUpdate;
