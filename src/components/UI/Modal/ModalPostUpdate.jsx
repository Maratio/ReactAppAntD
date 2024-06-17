import { Modal } from "antd";
import FormPostUpdate from "../Form/FormPostUpdate..jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ModalPostUpdate = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <Modal
        title="Обнови данные по Заметке"
        centered
        open={open}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={() => setOpen(false)}
        onCancel={() => {
          setOpen(false);
          navigate("/posts");
        }}
        width={1000}
      >
        <FormPostUpdate closeModal={() => setOpen()} />
      </Modal>
    </>
  );
};

export default ModalPostUpdate;
