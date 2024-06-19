import React, { useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import FormFotoAdd from "../Form/FormFotoAdd.jsx";

const ModalFotoAdd = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Modal
        title="Заполни данные и добавь Фото"
        centered
        open={open}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={() => setOpen(false)}
        onCancel={() => {
          setOpen(false);
          navigate("/photos");
        }}
        width={1000}
      >
        <FormFotoAdd closeModal={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default ModalFotoAdd;
