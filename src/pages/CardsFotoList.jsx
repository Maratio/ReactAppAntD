import React, { useCallback, useEffect, useState } from "react";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { getPagesPost } from "../utils/fetch";
import CardFoto from "../components/Card/CardFoto.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePhotosAction,
  fetchPhotosAction,
} from "../store/actions/photoActions.js";
const captionPhoto =
    "Смотрите и добавляйте фотографии своих Маршрутов, также их можно удалять";

const CardsFototList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.photoReducer);

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  const updatePostsList = useCallback(() => {
    const response = getPagesPost(
      { page: pageCurrent, limit: pageSize },
      photos
    );

    setPagePostsList(response.tripPosts);
    setRecCount(response.recCount);
  }, [photos, pageCurrent, pageSize]);

  function getPosts() {
    dispatch(fetchPhotosAction());
  }

  const deletePost = (id) => {
    dispatch(deletePhotosAction(id));
  };

  useEffect(getPosts, [dispatch, pageCurrent, pageSize]);
  useEffect(updatePostsList, [photos, updatePostsList]);

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
        <h2>{captionPhoto}</h2>
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
