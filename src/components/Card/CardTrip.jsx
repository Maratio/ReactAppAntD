import React, { useContext } from "react";
import classes from "./Card.module.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import appContext from "../../context/appContext";

const { Meta } = Card;

const CardTrip = (props) => {
  const { colorTheme } = useContext(appContext);
  const cnCard = cn(classes.card, { [classes.othTheme]: colorTheme });

  const navigate = useNavigate();
  const description =
    props.post?.body?.length > 120
      ? props.post.body.slice(0, 120) + "..."
      : props.post.body;

  const handleDetailTrip = () => navigate(`/trips/${props.post.id}`);

  return (
    <Card
      onClick={handleDetailTrip}
      className={cnCard}
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
