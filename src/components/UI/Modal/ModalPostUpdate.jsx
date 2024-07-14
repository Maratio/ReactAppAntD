import { Modal } from "antd";
import FormPostUpdate from "../Form/FormPostUpdate..jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOnePostAction,
  resetStateItemAction,
} from "../../../storeToolkit/services/postsSlice.js";

const ModalPostUpdate = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.item);
  const title = `Обнови данные по Заметке #${id}`;

  function getPost() {
    console.log({ post });
    console.log({ id });
    dispatch(fetchOnePostAction(id));
  }

  const handleModalClose = () => {
    setOpen(false);
    dispatch(resetStateItemAction());
    navigate(-1);
  };

  useEffect(getPost, [id, dispatch]);

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
      {Object.keys(post).length !== 0 && (
        <FormPostUpdate closeModal={setOpen} id={id} post={post} />
      )}
    </Modal>
  );
};

export default ModalPostUpdate;
