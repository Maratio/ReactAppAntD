import React, { useState } from "react";
import { Modal } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import FormCommentAdd from "../Form/FormCommentAdd.jsx";

const ModalCommentAdd = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { postId } = useParams();
  const title = `Заполни данные и добавь отзыв на Заметку #${postId}`;

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
      <FormCommentAdd postId={postId} closeModal={setOpen} />
    </Modal>
  );
};

export default ModalCommentAdd;
