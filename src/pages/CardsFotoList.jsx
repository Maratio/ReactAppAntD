import React, { useCallback, useEffect, useState } from "react";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { getCardsSearch, getPagesPost } from "../utils/fetch";
import CardFoto from "../components/Card/CardFoto.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePhotosAction,
  fetchPhotosAction,
} from "../storeToolkit/services/photosSlice.js";
import Search from "antd/es/input/Search.js";
import usePagination from "../customHooks/usePagination.js";
const captionPhoto =
  "Фотографии Маршрутов";

const CardsFototList = () => {
  
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.items);
  const [pageCurrent, pageSize, handleChangePaginator] = usePagination()

 

  const updatePostsList = useCallback((data = photos) => {
    const response = getPagesPost(
      { page: pageCurrent, limit: pageSize },
      data
    );

    setPagePostsList(response.tripPosts);
    setRecCount(response.recCount);
  }, [photos, pageCurrent, pageSize]);

  const getPosts = () => {
    dispatch(fetchPhotosAction());
  };

  const deletePost = (id) => {
    dispatch(deletePhotosAction(id));
  };

  const onSearch = (data) => {
    getCardsSearch("photos", data).then((response) => {
      if (response) {
        updatePostsList(response);
      }
    });
  };

  useEffect(getPosts, [dispatch]);
  useEffect(updatePostsList, [updatePostsList]);

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
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{ width: 200 }}
        />
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
