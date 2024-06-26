import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Card.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Card, Rate } from "antd";
import { deleteCardDetail, getCardDetail } from "../../utils/fetch";
const { Meta } = Card;
const card = "comments";

const CardCommentDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataPost, setDataPost] = useState("");
  const title = "Отзыв N" + dataPost.id + ` на Заметку #${dataPost.postId}. ` + dataPost.title;

  function getComment() {
    getCardDetail(card, setDataPost, id);
  }

  const deleteComment = (id) => {
    deleteCardDetail(id, card, navigate);
  };

  const handleDeleteComment = () => {
    deleteComment(id);
  };

  useEffect(getComment, [id]);

  return (
    <Card
      className={classes.cardDetail}
      size="small"
      extra={<Rate value={dataPost.rate} count={10} disabled />}
      hoverable
      actions={[<DeleteOutlined onClick={handleDeleteComment} key="delete" />]}
    >
      <div className={classes.bodyDetail}>
        <Meta
          className={classes.metaDetail}
          title={title}
          description={dataPost.body}
        />
      </div>
    </Card>
  );
};

export default CardCommentDetail;
