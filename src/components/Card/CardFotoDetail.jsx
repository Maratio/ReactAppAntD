import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Card.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { deleteCardDetail } from "../../utils/fetch";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePhotoAction } from "../../storeToolkit/services/photosSlice";
const { Meta } = Card;
const card = "photos";

const CardFotoDetail = () => {
  const colorTheme = useSelector((state) => state.theme.colorTheme);
  const cnCard = cn(classes.cardDetail, classes[`${colorTheme}`]);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photos.item);
  const title = "N" + photo.id + ". " + photo.title;

  function getPost() {
    dispatch(fetchOnePhotoAction(id));
  }

  const deletePost = (id) => {
    deleteCardDetail(id, card, navigate);
  };

  useEffect(getPost, [id, dispatch]);

  return (
    <Card
      className={cnCard}
      size="small"
      extra={<Rate value={Math.ceil(Math.random() * 5)} />}
      cover={<img alt="example" src={photo.url} />}
      actions={[<DeleteOutlined onClick={() => deletePost(id)} key="delete" />]}
    >
      <Meta
        className={classes.metaDetail}
        title={title}
        description={photo.body}
      />
    </Card>
  );
};

export default CardFotoDetail;
