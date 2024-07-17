import React from "react";
import classes from "./Card.module.css";
import {
  EditOutlined,
  DeleteOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { resetStateItemAction } from "../../storeToolkit/services/postsSlice";
const { Meta } = Card;

const CardPost = ({ post, deletePost }) => {
  const colorTheme = useSelector((state) => state.theme.colorTheme);
  const cnCard = cn(classes.card, classes[`${colorTheme}`]);
  const navigate = useNavigate();
  const title = "N" + post.id + ". " + post.title;
  const description =
    post?.body?.length > 90 ? post.body.slice(0, 89) + "..." : post.body;
  const dispatch = useDispatch();
    

  const handleDetailPost = () => navigate(`/posts/${post.id}`);
  const handleDeletePost = (e) => {
    e.stopPropagation();
    deletePost(post.id);
  };

  const handleEditPost = (e) => {
    e.stopPropagation();
    dispatch(resetStateItemAction());
    navigate(`/posts/${post.id}/update`);
  };

  const handleCommentPost = (e) => {
    e.stopPropagation();
    navigate(`/posts/${post.id}/comments`);
  };

  return (
    <Card
      onClick={handleDetailPost}
      className={cnCard}
      size="small"
      extra={<Rate value={post.rate} count={10} disabled />}
      hoverable
      cover={<img alt="example" src={post.url} />}
      actions={[
        <EditOutlined onClick={handleEditPost} key="edit" />,
        <DeleteOutlined onClick={handleDeletePost} key="delete" />,
        <MessageOutlined onClick={handleCommentPost} key="message" />,
      ]}
    >
      <Meta className={classes.meta} title={title} description={description} />
    </Card>
  );
};

export default CardPost;
