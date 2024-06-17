import React from "react";
import classes from "./Card.module.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const CardTrip = (props) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/trips/${props.post.id}`)}
      className={classes.card}
      hoverable
      cover={<img alt="example" src={props.post.url} />}
    >
      <Meta
        className={classes.meta}
        title={props.post.title}
        description={
          props.post.body.length > 120
            ? props.post.body.slice(0, 120) + "..."
            : props.post.body
        }
      />
    </Card>
  );
};

export default CardTrip;
