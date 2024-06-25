import { Button, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import SubmitButtonForm from "../Button/SubmitButtonForm";
import { updateCard } from "../../../utils/fetch";

const FormPostUpdate = ({ closeModal, id, dataPost }) => {
  const navigate = useNavigate();
  const [formUpdate] = Form.useForm();

  function updatePost({ Title, Description, Img_url }){
    updateCard(Title, Description, Img_url, navigate, id )
  }

  return (
    <Form
      form={formUpdate}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      initialValues={{
        Title: `${dataPost.title}`,
        Description: `${dataPost.body}`,
        Img_url: `${dataPost.url}`,
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
