import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
const { Meta } = Card;
const card = "posts";

const CardPostDetail = () => {
  const colorTheme = useSelector((state) => state.themeReducer.colorTheme);
  const cnCard = cn(classes.cardDetail, classes[`${colorTheme}`]);

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
      <Meta
        className={classes.metaDetail}
        title={title}
        description={dataPost.body}
      />
    </Card>
  );
};

export default CardPostDetail;
