import React from "react";
import { Button, Form, Input, Rate, Space } from "antd";
import { useNavigate } from "react-router-dom";
import SubmitButtonForm from "../Button/SubmitButtonForm";
import { addCardComment } from "../../../utils/fetch";

const card = "comments";

const FormCommentAdd = ({ closeModal, postId }) => {
  const navigate = useNavigate();

  function addComment({ Rating, Title, Description }) {
    addCardComment({ Rating, Title, navigate, card, Description, postId });
  }

  const [formAddComment] = Form.useForm();
  return (
    <Form
      form={formAddComment}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      initialValues={{
        remember: true,
      }}
      onFinish={addComment}
    >
      <Form.Item
        name="Rating"
        label="Rating"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Rate count={10} />
      </Form.Item>
      <Form.Item
        name="Title"
        label="Title"
        rules={[{ max: 50, required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Description"
        label="Description"
        rules={[{ max: 100, required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButtonForm closeModal={closeModal} form={formAddComment}>
            Submit
          </SubmitButtonForm>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormCommentAdd;
