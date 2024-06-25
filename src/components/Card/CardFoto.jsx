import React from "react";
import classes from "./Card.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const CardFoto = ({ post, deletePost }) => {
  const navigate = useNavigate();
  const title = "N" + post.id + ". " + post.title;
  const handleDeleteFoto = (e) => {
    e.stopPropagation();
    deletePost(post.id);
  };

  const handleDetailFoto = () => navigate(`/photos/${post.id}`);

  return (
    <Card
      onClick={handleDetailFoto}
      className={classes.card}
      size="small"
      extra={<Rate value={Math.ceil(Math.random() * 5)} />}
      hoverable
      cover={<img alt="example" src={post.url} />}
      actions={[<DeleteOutlined onClick={handleDeleteFoto} key="delete" />]}
    >
      <div className={classes.body}>
        <Meta className={classes.meta} title={title} />
      </div>
    </Card>
  );
};

export default CardFoto;
