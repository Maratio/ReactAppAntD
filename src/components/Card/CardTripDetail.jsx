import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../../constants.js";
import { Card } from "antd";
import classes from "./Card.module.css";

const { Meta } = Card;

const CardTripDetail = () => {
  const { id } = useParams();
  const [dataPost, setDataPost] = useState("");

  function getPost() {
    fetch(`${BACKEND_URL}/api/routes/${id}?`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            console.log(data);
            setDataPost(data);
          });
        }
      })
      .catch((err) => console.error("error >>>>>", err));
  }

  useEffect(() => getPost(), [id]);
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
