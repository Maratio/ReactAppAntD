import React from "react";
import { Button, Form, Input, Space } from "antd";
import { BACKEND_URL } from "../../../constants";
import { useNavigate, useParams } from "react-router-dom";
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
      onClick={() => closeModal(false)}
      type="primary"
      htmlType="submit"
      disabled={!submittable}
    >
      {children}
    </Button>
  );
};

const FormPostUpdate = ({ closeModal }) => {
  const navigate = useNavigate();
  const { id } = useParams();

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
          navigate("/posts");
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
          <SubmitButton closeModal={closeModal} form={formUpdate}>
            Submit
          </SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormPostUpdate;
