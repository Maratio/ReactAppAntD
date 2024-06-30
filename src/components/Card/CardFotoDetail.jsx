import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Card.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { deleteCardDetail, getCardDetail } from "../../utils/fetch";
const { Meta } = Card;
const card = "photos";

const CardFotoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataPost, setDataPost] = useState("");
  const title = "N" + dataPost.id + ". " + dataPost.title

  function getPost() {
    getCardDetail(card, setDataPost, id);
  }

  const deletePost = (id) => {
    deleteCardDetail(id, card, navigate);
  };

  useEffect(getPost, [id]);

  return (
    <Card
      className={classes.cardDetail}
      size="small"
      extra={<Rate value={Math.ceil(Math.random() * 5)} />}
      cover={<img alt="example" src={dataPost.url} />}
      actions={[<DeleteOutlined onClick={() => deletePost(id)} key="delete" />]}
    >
      <div className={classes.bodyDetail}>
        <Meta
          className={classes.metaDetail}
          title={title}
          description={dataPost.body}
        />
      </div>
    </Card>
  );
};

export default CardFotoDetail;
