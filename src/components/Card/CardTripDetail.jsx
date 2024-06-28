import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import classes from "./Card.module.css";
import { getCardDetail } from "../../utils/fetch";
import cn from "classnames";
import appContext from "../../context/appContext";

const { Meta } = Card;
const card = "routes";

const CardTripDetail = () => {
  const { colorTheme } = useContext(appContext);
  const cnCard = cn(classes.cardDetail, { [classes.othTheme]: colorTheme });

  const { id } = useParams();
  const [dataPost, setDataPost] = useState("");

  function getPost() {
    getCardDetail(card, setDataPost, id);
  }

  useEffect(getPost, [id]);
  return (
    <Card className={cnCard} cover={<img alt="example" src={dataPost.url} />}>
      <Meta
        className={classes.metaDetail}
        title={dataPost.title}
        description={dataPost.body}
      />
    </Card>
  );
};

export default CardTripDetail;
