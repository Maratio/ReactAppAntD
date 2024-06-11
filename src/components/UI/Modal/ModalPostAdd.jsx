import React, { useState } from "react";
import { Button, Modal } from "antd";
import classes from "./ModalPostAdd.module.css";
import FormPostAdd from "../Form/FormPostAdd.jsx";

const ModalPostAdd = ({ saveInfoAddPost }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className={classes["btn-add"]}
        type="primary"
        onClick={() => setOpen(true)}
      >
        Добавить Заметку
      </Button>
      <Modal
        title="Заполни данные и добавь отчет"
        centered
        open={open}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <FormPostAdd
          saveInfoAddPost={saveInfoAddPost}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default ModalPostAdd;
