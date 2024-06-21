import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import classes from "./Card.module.css";
import { getCardDetail } from "../../utils/fetch";

const { Meta } = Card;
const card = "routes";

const CardTripDetail = () => {
  const { id } = useParams();
  const [dataPost, setDataPost] = useState("");

  function getPost() {
    getCardDetail(card, setDataPost, id);
  }

  useEffect(getPost, [id]);
  return (
    <Card
      className={classes.cardDetail}
      hoverable
      cover={<img alt="example" src={dataPost.url} />}
    >
      <Meta
        className={classes.metaDetail}
        title={dataPost.title}
        description={dataPost.body}
      />
    </Card>
  );
};

export default CardTripDetail;
