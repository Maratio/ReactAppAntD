import { Modal } from "antd";
import FormPostUpdate from "../Form/FormPostUpdate..jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const ModalPostUpdate = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

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
        <FormPostUpdate closeModal={() => setOpen(false)} id = {id} />
      </Modal>
    </>
  );
};

export default ModalPostUpdate;
