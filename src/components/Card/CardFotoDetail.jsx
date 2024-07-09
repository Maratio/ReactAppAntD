import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Card.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { deleteCardDetail, getCardDetail } from "../../utils/fetch";
import cn from "classnames";
import { useSelector } from "react-redux";
const { Meta } = Card;
const card = "photos";

const CardFotoDetail = () => {
  const colorTheme = useSelector((state) => state.themeReducer.colorTheme);
  const cnCard = cn(classes.cardDetail, classes[`${colorTheme}`]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataPost, setDataPost] = useState("");
  const title = "N" + dataPost.id + ". " + dataPost.title;

  function getPost() {
    getCardDetail(card, setDataPost, id);
  }

  const deletePost = (id) => {
    deleteCardDetail(id, card, navigate);
  };

  useEffect(getPost, [id]);

  return (
    <Card
      className={cnCard}
      size="small"
      extra={<Rate value={Math.ceil(Math.random() * 5)} />}
      cover={<img alt="example" src={dataPost.url} />}
      actions={[<DeleteOutlined onClick={() => deletePost(id)} key="delete" />]}
    >
      <Meta
        className={classes.metaDetail}
        title={title}
        description={dataPost.body}
      />
    </Card>
  );
};

export default CardFotoDetail;
