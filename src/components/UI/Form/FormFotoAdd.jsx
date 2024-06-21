import React from "react";
import { Button, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import SubmitButtonForm from "../Button/SubmitButtonForm";
import { addCardCall } from "../../../utils/fetch";
const card = "photos"

const FormFotoAdd = ({ closeModal }) => {
  const navigate = useNavigate();

  function addFoto({ Title, Img_url}){
    addCardCall(Title, Img_url, navigate ,card)
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
            pattern: /^(ftp|http|https):\/\/[^ "]*\.(jpg|png|gif|raw|tiff|bmp|psd)$/
          },
        ]}
      >
        <Input placeholder="Поддерживает протоколы ftp|http|https, формат фото jpg|png|gif|raw|tiff|bmp|psd" />
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
