import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Card.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Card, Rate } from "antd";
import { deleteCardDetail } from "../../utils/fetch";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCommentsAction } from "../../storeToolkit/services/commentsSlice";
const { Meta } = Card;
const card = "comments";

const CardCommentDetail = () => {
  const colorTheme = useSelector((state) => state.theme.colorTheme);
  const cnCard = cn(classes.cardDetail, classes[`${colorTheme}`]);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comments.item);
  const title = `Отзыв N${comment.id} на Заметку #${comment.postId}. ${comment.title}`;

  function getComment() {
    dispatch(fetchOneCommentsAction(id));
  }

  const deleteComment = (id) => {
    deleteCardDetail(id, card, navigate);
  };

  const handleDeleteComment = () => {
    deleteComment(id);
  };

  useEffect(getComment, [id, dispatch]);

  return (
    <Card
      className={cnCard}
      size="small"
      extra={<Rate value={comment.rate} count={10} disabled />}
      actions={[<DeleteOutlined onClick={handleDeleteComment} key="delete" />]}
    >
      <Meta
        className={classes.metaDetail}
        title={title}
        description={comment.body}
      />
    </Card>
  );
};

export default CardCommentDetail;
