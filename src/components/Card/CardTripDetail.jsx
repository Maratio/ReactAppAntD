import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import classes from "./Card.module.css";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneTripAction } from "../../storeToolkit/services/tripsSlice";
const { Meta } = Card;

const CardTripDetail = () => {
  const colorTheme = useSelector((state) => state.theme.colorTheme);
  const cnCard = cn(classes.cardDetail, classes[`${colorTheme}`]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const trip = useSelector((state) => state.routes.item);

  function getPost() {
    dispatch(fetchOneTripAction(id));
  }

  useEffect(getPost, [id, dispatch]);
  return (
    <Card className={cnCard} cover={<img alt="example" src={trip.url} />}>
      <Meta
        className={classes.metaDetail}
        title={trip.title}
        description={trip.body}
      />
    </Card>
  );
};

export default CardTripDetail;
