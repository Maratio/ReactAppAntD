import { Modal } from "antd";
import FormPostUpdate from "../Form/FormPostUpdate..jsx";

const ModalPostUpdate = ({
  resetEnableUpdateFormPost,
  enableUpdateFormPost,
  updatePost,
}) => {
  return (
    <>
      <Modal
        title="Обнови данные по Заметке"
        centered
        open={enableUpdateFormPost}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={() => resetEnableUpdateFormPost()}
        onCancel={() => resetEnableUpdateFormPost()}
        width={1000}
      >
        <FormPostUpdate
          updatePost={updatePost}
          closeModal={resetEnableUpdateFormPost}
        />
      </Modal>
    </>
  );
};

export default ModalPostUpdate;
