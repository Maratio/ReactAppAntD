import React from "react";
import classes from "./Card.module.css";
import { EditOutlined, DeleteOutlined, MessageOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const CardPost = ({ post, deletePost }) => {
  const navigate = useNavigate();
  const title = "N" + post.id + ". " + post.title;
  const description =
    post?.body?.length > 90 ? post.body.slice(0, 89) + "..." : post.body;

  const handleDetailPost = () => navigate(`/posts/${post.id}`);
  const handleDeletePost = (e) => {
    e.stopPropagation();
    deletePost(post.id);
  };

  const handleEditPost = (e) => {
    e.stopPropagation();
    navigate(`/posts/${post.id}/update`);
  };

  const handleCommentPost = (e) => {
    e.stopPropagation();
    navigate(`/posts/${post.id}/comments`);
  };

  return (
    <Card
      onClick={handleDetailPost}
      className={classes.card}
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
      <div className={classes.body}>
        <Meta
          className={classes.meta}
          title={title}
          description={description}
        />
      </div>
    </Card>
  );
};

export default CardPost;
