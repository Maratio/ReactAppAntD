import React from "react";
import classes from "./Card.module.css";
import { EditOutlined, DeleteOutlined, StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const card = "comments";

const CardComment = ({ post, deletePost }) => {
  const navigate = useNavigate();
  const title = "Отзыв N" + post.id + ` на Заметку #${post.postId}. ` + post.title;
  const description =
    post?.body?.length > 90 ? post.body.slice(0, 89) + "..." : post.body;
    
  const handleDetailComment = () => navigate(`/${card}/${post.id}`);
  const handleDeleteComment = (e) => {
    e.stopPropagation();
    deletePost(post.id);
  };

  return (
    <Card
      onClick={handleDetailComment}
      className={classes.card}
      size="small"
      extra={<Rate value={post.rate} count={10} disabled />}
      hoverable
      actions={[
        <DeleteOutlined onClick={handleDeleteComment} key="delete" />,
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

export default CardComment;
