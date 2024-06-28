import React, { useCallback, useEffect, useState } from "react";
import CardPost from "../components/Card/CardPost.jsx";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import {
  deleteCard,
  deleteCommentsWithPost,
  getCards,
  getPagesPost,
} from "../utils/fetch";
const caption =
  "Смотрите, добавляйте, оставляйте отзывы, редактируйте, удаляйте Заметки по Маршруту";

const CardsPostList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const navigate = useNavigate();
  const card = "posts";

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  const updatePostsList = useCallback(
    (data) => {
      const response = getPagesPost(
        { page: pageCurrent, limit: pageSize },
        data
      );
      setPagePostsList(response.tripPosts);
      setRecCount(response.recCount);
    },
    [pageCurrent, pageSize]
  );

  function getPosts() {
    getCards(card).then((data) => {
      updatePostsList(data);
    });
  }

  const deletePost = (id) => {
    deleteCard(card, id).then((response) => {
      if (response.status === 204) {
        deleteCommentsWithPost(id);
        getPosts();
      }
    });
  };

  useEffect(getPosts, [pageCurrent, pageSize, updatePostsList]);

  return (
    <div className={classes.content}>
      <div className={classes["btns-block"]}>
        <Button
          className={classes["btn-add"]}
          type="primary"
          onClick={() => navigate("/posts/new")}
        >
          Добавить Заметку
        </Button>
        <h2>{caption}</h2>
      </div>
      <div className={classes.list}>
        {pagePostsList.map(({ userId, id, url, title, body, rate }) => (
          <div key={id}>
            <CardPost
              deletePost={deletePost}
              post={{ userId, id, url, title, body, rate }}
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

export default CardsPostList;
