import React, { useEffect, useState } from "react";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import { deleteCard, getCards, getCardsFilter } from "../utils/fetch.js";
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

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  function getComments() {
    if (postId) {
      getCardsFilter(
        card,
        postId,
        setPagePostsList,
        setRecCount,
        pageCurrent,
        pageSize
      );
    } else {
      getCards(card, setPagePostsList, setRecCount, pageCurrent, pageSize);
    }
  }

  const deleteComment = (id) => {
    deleteCard(card, id, navigate, setPagePostsList, setRecCount, pageCurrent, pageSize);
  };

  useEffect(getComments, [pageCurrent, pageSize]);

  return (
    <div className={classes.content}>
      <div className={classes["btns-block"]}>
        <Button
          className={classes["btn-add"]}
          type="primary"
          onClick={() => navigate(`/comments/${postId}/new`)}
        >
          Добавить Отзыв
        </Button>
        <h2>{caption}</h2>
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
