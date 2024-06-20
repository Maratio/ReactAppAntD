import React from "react";
import classes from "./Card.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const CardFoto = ({ post, deletePost }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/photos/${post.id}`)}
      className={classes.card}
      size="small"
      extra={<Rate value={Math.ceil(Math.random() * 5)} />}
      hoverable
      cover={<img alt="example" src={post.url} />}
      actions={[
        <DeleteOutlined
          onClick={(e) => {
            e.stopPropagation();
            deletePost(post.id);
          }}
          key="delete"
        />,
      ]}
    >
      <div className={classes.body}>
        <Meta
          className={classes.meta}
          title={"N" + post.id + ". " + post.title}
          // description={
          //   post.body.length > 120 ? post.body.slice(0, 120) + "..." : post.body
          // }
        />
      </div>
    </Card>
  );
};

export default CardFoto;
