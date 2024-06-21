import React from "react";
import { Button} from "antd";

const SubmitButtonForm = ({ form, children, closeModal }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  React.useEffect(() => {
    console.log("j");
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form]);
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

export default SubmitButtonForm;
