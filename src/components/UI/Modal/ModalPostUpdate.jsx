import { Modal } from "antd";
import FormPostUpdate from "../Form/FormPostUpdate..jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCardDetail } from "../../../utils/utils.js";
const card = "posts";

const ModalPostUpdate = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataPost, setDataPost] = useState(false);

  function getPost() {
    getCardDetail(card, setDataPost, id);
  }

  useEffect(getPost, [id]);

  return (
    <>
      <Modal
        title={`Обнови данные по Заметке #${id}`}
        centered
        open={open}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={() => setOpen(false)}
        onCancel={() => {
          setOpen(false);
          navigate(`/posts/${id}`);
        }}
        width={1000}
      >
        {dataPost ? (
          <FormPostUpdate
            closeModal={() => setOpen(false)}
            id={id}
            dataPost={dataPost}
          />
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};

export default ModalPostUpdate;
