import React from "react";
import classes from "./CardTrip.module.css";
import { Button } from "antd";
import { Card } from "antd";
const { Meta } = Card;

const CardPost = ({post, delPostFromListCard}) => {

  return (
    <Card      
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src={post.url}
        />
      }
    >
      <Meta title={"N" + post.id + ". " + post.title} description={post.body} />
      <Button onClick={() => delPostFromListCard(post.id, post.userId)} danger>Удалить отчет</Button>
    </Card>
  );
};

export default CardPost;
