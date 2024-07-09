import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Card.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Card, Rate } from "antd";
import { deleteCardDetail, getCardDetail } from "../../utils/fetch";
import cn from "classnames";
import appContext from "../../context/appContext";

const { Meta } = Card;
const card = "comments";

const CardCommentDetail = () => {
  const { colorTheme } = useContext(appContext);
  const cnCard = cn(classes.cardDetail, { [classes.othTheme]: colorTheme });

  const navigate = useNavigate();
  const { id } = useParams();
  const [dataPost, setDataPost] = useState("");
  const title =
    "Отзыв N" +
    dataPost.id +
    ` на Заметку #${dataPost.postId}. ` +
    dataPost.title;

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
      className={cnCard}
      size="small"
      extra={<Rate value={dataPost.rate} count={10} disabled />}
      actions={[<DeleteOutlined onClick={handleDeleteComment} key="delete" />]}
    >
      <Meta
        className={classes.metaDetail}
        title={title}
        description={dataPost.body}
      />
    </Card>
  );
};

export default CardCommentDetail;
