import React, { useState } from "react";
import { Modal } from "antd";
import FormPostAdd from "../Form/FormPostAdd.jsx";
import { useNavigate } from "react-router-dom";
const title = "Заполни данные и добавь Заметку по Маршруту";

const ModalPostAdd = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleModalClose = () => {
    setOpen(false);
    navigate(-1);
  };

  return (
    <Modal
      title={title}
      centered
      open={open}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      onOk={handleModalClose}
      onCancel={handleModalClose}
      width={1000}
    >
      <FormPostAdd closeModal={setOpen} />
    </Modal>
  );
};

export default ModalPostAdd;
