import React from "react";
import { Button, Form } from "antd";

const SubmitButtonForm = ({ form, children, closeModal }) => {
  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], form);
  const handleModalClose = () => closeModal(false)

  // Watch all values
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
      onClick={handleModalClose}
      type="primary"
      htmlType="submit"
      disabled={!submittable}
    >
      {children}
    </Button>
  );
};

export default SubmitButtonForm;
