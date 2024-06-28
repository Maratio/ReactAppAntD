import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Card.module.css";
import {
  EditOutlined,
  DeleteOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Card, Rate } from "antd";
import { deleteCardDetail, getCardDetail } from "../../utils/fetch";
import cn from "classnames";
import appContext from "../../context/appContext";

const { Meta } = Card;
const card = "posts";

const CardPostDetail = () => {
  const { colorTheme } = useContext(appContext);
  const cnCard = cn(classes.cardDetail, { [classes.othTheme]: colorTheme });

  const navigate = useNavigate();
  const { id } = useParams();
  const [dataPost, setDataPost] = useState("");
  const title = "N" + dataPost.id + ". " + dataPost.title;

  function getPost() {
    getCardDetail(card, setDataPost, id);
  }

  const deletePost = (id) => {
    deleteCardDetail(id, card, navigate);
  };

  const handleEditPost = () => {
    navigate(`/posts/${id}/update`);
  };

  const handleDeletePost = () => {
    deletePost(id);
  };

  const handleCommentPost = (e) => {
    e.stopPropagation();
    navigate(`/posts/${id}/comments`);
  };

  useEffect(getPost, [id]);

  return (
    <Card
      className={cnCard}
      size="small"
      extra={<Rate value={dataPost.rate} count={10} disabled />}
      cover={<img alt="example" src={dataPost.url} />}
      actions={[
        <EditOutlined onClick={handleEditPost} key="edit" />,
        <DeleteOutlined onClick={handleDeletePost} key="delete" />,
        <MessageOutlined onClick={handleCommentPost} key="message" />,
      ]}
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

export default CardPostDetail;
