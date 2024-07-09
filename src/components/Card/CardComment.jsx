import React, { useContext } from "react";
import classes from "./Card.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
import appContext from "../../context/appContext";
import cn from "classnames";

const { Meta } = Card;
const card = "comments";

const CardComment = ({ post, deletePost }) => {
  const { colorTheme } = useContext(appContext);
  const cnCard = cn(classes.card, { [classes.othTheme]: colorTheme });

  const navigate = useNavigate();
  const title =
    "Отзыв N" + post.id + ` на Заметку #${post.postId}. ` + post.title;
  const description =
    post?.body?.length > 90 ? post.body.slice(0, 89) + "..." : post.body;

  const handleDetailComment = () => navigate(`/${card}/${post.id}`);
  const handleDeleteComment = (e) => {
    e.stopPropagation();
    deletePost(post.id);
  };

  return (
    <Card
      onClick={handleDetailComment}
      className={cnCard}
      size="small"
      extra={<Rate value={post.rate} count={10} disabled />}
      hoverable
      actions={[<DeleteOutlined onClick={handleDeleteComment} key="delete" />]}
    >
      <Meta className={classes.meta} title={title} description={description} />
    </Card>
  );
};

export default CardComment;
