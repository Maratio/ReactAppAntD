import React, { useEffect, useState } from "react";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import {
  deleteCard,
  getCards,
  getCardsFilter,
  getPagesPost,
} from "../utils/fetch.js";
import CardComment from "../components/Card/CardComment.jsx";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const CardsCommentList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const navigate = useNavigate();
  const card = "comments";
  const { postId } = useParams();
  const caption = `Смотрите, редактируйте, удаляйте, добавляйте ваши Отзывы к Заметке #${postId}`;
  const captionComments = `Ознокомьтесь со всеми отзывами, для создания отзыва перейдите в Заметки`;
  
  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  function getComments() {
    if (postId) {
      getCardsFilter(card, postId).then((data) => {
        const response = getPagesPost(
          { page: pageCurrent, limit: pageSize },
          data
        );
        setPagePostsList(response.tripPosts);
        setRecCount(response.recCount);
      });
    } else {
      getCards(card).then((data) => {
        const response = getPagesPost(
          { page: pageCurrent, limit: pageSize },
          data
        );
        setPagePostsList(response.tripPosts);
        setRecCount(response.recCount);
      });
    }
  }

  const deleteComment = (id) => {
    deleteCard(card, id).then((response) => {
      if (response.status === 204) {
        navigate(-1);
      }
    });
  };

  useEffect(getComments, [postId,pageCurrent, pageSize]);

  return (
    <div className={classes.content}>
      <div className={classes["btns-block"]}>
        {postId ? (
          <Button
            className={classes["btn-add"]}
            type="primary"
            onClick={() => navigate(`/comments/${postId}/new`)}
          >
            Добавить Отзыв
          </Button>
        ) : (
          <Button
            className={classes["btn-add"]}
            type="primary"
            onClick={() => navigate(`/posts`)}
          >
            Перейти в Заметки
          </Button>
        )}
        {postId ? <h2>{caption}</h2> : <h2>{captionComments}</h2>}
      </div>
      <div className={classes.list}>
        {pagePostsList.map(({ postId, id, title, body, rate }) => (
          <div key={id}>
            <CardComment
              deletePost={deleteComment}
              post={{ postId, id, title, body, rate }}
            />
          </div>
        ))}
        <PaginationSite
          paginationParam={{
            pageCurrent,
            pageSize,
            recCount,
            onChange: handleChangePaginator,
          }}
        />
      </div>
    </div>
  );
};

export default CardsCommentList;
