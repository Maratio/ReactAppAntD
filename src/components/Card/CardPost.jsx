import React from "react";
import classes from "./CardTrip.module.css";
import { Button } from "antd";
import { Card } from "antd";
const { Meta } = Card;



const CardPost = (props) => {
  return (
    <Card      
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src={props.post.url}
        />
      }
    >
      <Meta title={"N" + props.post.id + ". " + props.post.title} description={props.post.body} />
      <Button danger>Удалить отчет</Button>
    </Card>
  );
};

export default CardPost;
