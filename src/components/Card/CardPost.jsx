import React from "react";
import classes from "./CardTrip.module.css";
import { EditOutlined, DeleteOutlined, StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
const { Meta } = Card;

const CardPost = ({ post, deletePost, getUserIdEditPost }) => {
  return (
    <Card
      className={classes.card}
      size="small"
      extra={<Rate value={Math.ceil(Math.random()*5)} />}
      hoverable
      cover={<img alt="example" src={post.url} />}
      actions={[
        <EditOutlined onClick={() => getUserIdEditPost(post.id)} key="edit" />,
        <DeleteOutlined onClick={() => deletePost(post.id)} key="delete" />,
      ]}
    >
      <div className={classes.body}>
        <Meta
          className={classes.meta}
          title={"N" + post.id + ". " + post.title}
          description={post.body}
        />
      </div>
    </Card>
  );
};

export default CardPost;
