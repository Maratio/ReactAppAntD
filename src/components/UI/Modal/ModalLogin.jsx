import { Modal } from "antd";
import FormLogin from "../Form/FormLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ModalLogin() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleModalClose = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <Modal
      title="Введите логин и пароль"
      centered
      open={open}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      onOk={handleModalClose}
      onCancel={handleModalClose}
      width={500}
    >
      <FormLogin closeModal={setOpen} />
    </Modal>
  );
}
