import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Card.module.css";
import {
  EditOutlined,
  DeleteOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Card, Rate } from "antd";
import { deleteCardDetail } from "../../utils/fetch";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePostAction, resetStateItemAction } from "../../storeToolkit/services/postsSlice";
const { Meta } = Card;
const card = "posts";

const CardPostDetail = () => {
  const colorTheme = useSelector((state) => state.theme.colorTheme);
  const cnCard = cn(classes.cardDetail, classes[`${colorTheme}`]);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.item);
  const navigate = useNavigate();
  const { id } = useParams();
  const title = `N${post.id}. ${post.title}`;

  function getPost() {
    dispatch(fetchOnePostAction(id));
  }

  const deletePost = (id) => {
    deleteCardDetail(id, card, navigate);
  };

  const handleEditPost = () => {
    dispatch(resetStateItemAction());
    navigate(`/posts/${id}/update`);
  };

  const handleDeletePost = () => {
    deletePost(id);
  };

  const handleCommentPost = (e) => {
    e.stopPropagation();
    navigate(`/posts/${id}/comments`);
  };

  useEffect(getPost, [id, dispatch]);

  return (
    <Card
      className={cnCard}
      size="small"
      extra={<Rate value={post.rate} count={10} disabled />}
      cover={<img alt="example" src={post.url} />}
      actions={[
        <EditOutlined onClick={handleEditPost} key="edit" />,
        <DeleteOutlined onClick={handleDeletePost} key="delete" />,
        <MessageOutlined onClick={handleCommentPost} key="message" />,
      ]}
    >
      <Meta
        className={classes.metaDetail}
        title={title}
        description={post.body}
      />
    </Card>
  );
};

export default CardPostDetail;
