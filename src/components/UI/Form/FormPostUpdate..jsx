import { Button, Form, Input, Space, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import SubmitButtonForm from "../Button/SubmitButtonForm";
import { updateCard } from "../../../utils/fetch";
import { PATTERN_URL, PLACEHOLDER_URL } from "../../../utils/constants";

const FormPostUpdate = ({ closeModal, id, post }) => {
  const navigate = useNavigate();
  const [formUpdate] = Form.useForm();

  function updatePost({ Rating, Title, Description, Img_url }) {
    updateCard({Rating, Title, Description, Img_url, navigate, id});
  }

  return (
    <Form
      form={formUpdate}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      initialValues={{
        Rating: `${post.rate}`,
        Title: `${post.title}`,
        Description: `${post.body}`,
        Img_url: `${post.url}`,
      }}
      onFinish={updatePost}
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
