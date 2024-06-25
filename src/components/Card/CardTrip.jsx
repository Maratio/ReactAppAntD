import React from "react";
import classes from "./Card.module.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const CardTrip = (props) => {
  const navigate = useNavigate();
  const description =
    props.post?.body?.length > 120
      ? props.post.body.slice(0, 120) + "..."
      : props.post.body;

  const handleDetailTrip = () => navigate(`/trips/${props.post.id}`);

  return (
    <Card
      onClick={handleDetailTrip}
      className={classes.card}
      hoverable
      cover={<img alt="example" src={props.post.url} />}
    >
      <Meta
        className={classes.meta}
        title={props.post.title}
        description={description}
      />
    </Card>
  );
};

export default CardTrip;
