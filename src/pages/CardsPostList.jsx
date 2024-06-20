import React, { useEffect, useState } from "react";
import CardPost from "../components/Card/CardPost.jsx";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { deleteCardCall, getCardsCall } from "../utils/utils.js";

const CardsPostList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const navigate = useNavigate();

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  const card = "posts";

  function getPosts() {
    getCardsCall(card, setPagePostsList, setRecCount, pageCurrent, pageSize);
  }

  const deletePost = (postId) => {
    deleteCardCall(
      card,
      postId,
      setPagePostsList,
      setRecCount,
      pageCurrent,
      pageSize
    );
  };

  useEffect(getPosts, [pageCurrent, pageSize]);

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
        <h2>Смотрите, добавляйте, редактируйте, удаляйте Заметки</h2>
      </div>
      <div className={classes.list}>
        {pagePostsList.map(({ userId, id, url, title, body }) => (
          <div key={id}>
            <CardPost
              deletePost={deletePost}
              post={{ userId, id, url, title, body }}
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
