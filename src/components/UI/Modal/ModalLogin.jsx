import { Modal } from "antd";
import FormLogin from "../Form/FormLogin";

export default function ModalLogin({ open, handleLogin, onCancel }) {
  return (
    <>
      <Modal
        title="Введите логин и пароль"
        centered
        open={open}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={handleLogin}
        onCancel={onCancel}
        width={500}
      >
        <FormLogin saveInfoAddPost={handleLogin} closeModal={onCancel} />
      </Modal>
    </>
  );
}
