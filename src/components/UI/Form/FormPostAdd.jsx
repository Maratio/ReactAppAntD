import React from "react";
import { Button, Form, Input, Rate, Space } from "antd";
import { useNavigate } from "react-router-dom";
import SubmitButtonForm from "../Button/SubmitButtonForm";
import { PATTERN_URL, PLACEHOLDER_URL } from "../../../utils/constants";
import { addPostsAction } from "../../../storeToolkit/services/postsSlice";
import { useDispatch } from "react-redux";

const FormPostAdd = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function addPost({ Rating, Title, Img_url, Description }) {
    dispatch(addPostsAction({ Rating, Title, Img_url, navigate, Description }));
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
      onFinish={addPost}
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

export default FormPostAdd;
