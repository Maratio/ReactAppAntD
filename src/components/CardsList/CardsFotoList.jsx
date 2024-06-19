import React, { useEffect, useState } from "react";
import classes from "./CardsTripList.module.css";
import PaginationSite from "../UI/Pagination/PaginationSite.jsx";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { deleteCardCall, getCardsCall } from "../../utils/utils.js";
import CardFoto from "../Card/CardFoto.jsx";

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
    <div>
      <div className={classes["btns-block"]}>
        <Button
          className={classes["btn-add"]}
          type="primary"
          onClick={() => navigate("/photos/new")}
        >
          Добавить Фото
        </Button>
      </div>
      <div className={classes._}>
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
