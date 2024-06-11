import React, { useEffect, useLayoutEffect, useState } from "react";
import { Modal } from "antd";
import FormPostUpdate from "../Form/FormPostUpdate..jsx";

const ModalPostUpdate = ({
  resetEnableUpdateFormPost,
  enableUpdateFormPost,
  updatePost,
}) => {
  const [open, setOpen] = useState(false);

  const setOpenModal = () => {
    if (enableUpdateFormPost) setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => setOpenModal(), [enableUpdateFormPost]);
  useLayoutEffect(() => resetEnableUpdateFormPost(false));

  return (
    <>
      <Modal
        title="Обнови данные по Заметке"
        centered
        open={open}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <FormPostUpdate updatePost={updatePost} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default ModalPostUpdate;
