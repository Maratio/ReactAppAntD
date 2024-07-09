import React, { useCallback, useEffect, useState } from "react";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { deleteCard, getCards, getPagesPost } from "../utils/fetch";
import CardFoto from "../components/Card/CardFoto.jsx";

const CardsFototList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const navigate = useNavigate();
  const card = "photos";

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
      if (response) {
        getPosts();
      }
    });
  };

  useEffect(getPosts, [pageCurrent, pageSize,updatePostsList]);

  return (
    <div>
      <div className={classes["btns-block"]}>
        <Button
          className={classes["btn-add"]}
          type="primary"
          onClick={() => navigate("/photos/new")}
        >
          Добавить Фото
        </Button>
        <h2>Смотрите и добавляйте фотографии своих Маршрутов</h2>
      </div>
      <div className={classes.list}>
        {pagePostsList.map(({ id, url, albumId, title }) => (
          <div key={id}>
            <CardFoto
              deletePost={deletePost}
              post={{ id, url, albumId, title }}
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

export default CardsFototList;
