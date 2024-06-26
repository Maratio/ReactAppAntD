import { Modal } from "antd";
import FormPostUpdate from "../Form/FormPostUpdate..jsx";
import {useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCardDetail } from "../../../utils/fetch.js";
const card = "posts";

const ModalPostUpdate = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataPost, setDataPost] = useState(false);
  const title = `Обнови данные по Заметке #${id}`


  function getPost() {
    getCardDetail(card, setDataPost, id);
  }

  
  const handleModalClose = () => {
    setOpen(false);
    navigate(-1)
  };

  useEffect(getPost, [id]);

  return (
    <>
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
        {dataPost && (
          <FormPostUpdate closeModal={setOpen} id={id} dataPost={dataPost} />
        )}
      </Modal>
    </>
  );
};

export default ModalPostUpdate;
