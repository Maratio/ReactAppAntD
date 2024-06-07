import React from "react";
import classes from "./CardTrip.module.css";
import { Card } from "antd";
const { Meta } = Card;


const CardTrip = (props) => {
  return (
    <Card      
      hoverable
      style={{
        width: 340,
      }}
      cover={
        <img
          alt="example"
          src={props.post.url}
        />
      }
    >
      <Meta title={props.post.title} description={props.post.body} />
    </Card>
  );
};

export default CardTrip;
