import React, { useEffect, useState } from "react";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { deleteCard, getCards} from "../utils/fetch";
import CardFoto from "../components/Card/CardFoto.jsx";

const CardsFototList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const navigate = useNavigate();

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  const card = "photos";

  function getPosts() {
    getCards(card, setPagePostsList, setRecCount, pageCurrent, pageSize);
  }

  const deletePost = (id) => {
    deleteCard(
      card,
      id,
      setPagePostsList,
      setRecCount,
      pageCurrent,
      pageSize
    );
  };

  useEffect(getPosts, [pageCurrent, pageSize]);

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
