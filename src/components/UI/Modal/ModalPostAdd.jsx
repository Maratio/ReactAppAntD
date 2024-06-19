import React, { useState } from "react";
import { Modal } from "antd";
import FormPostAdd from "../Form/FormPostAdd.jsx";
import { useNavigate } from "react-router-dom";

const ModalPostAdd = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Modal
        title="Заполни данные и добавь Заметку"
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
        <FormPostAdd closeModal={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default ModalPostAdd;
