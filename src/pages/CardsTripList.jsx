import React, { useCallback, useEffect, useState } from "react";
import CardTrip from "../components/Card/CardTrip";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite";
import { getPagesPost } from "../utils/fetch";
import { useDispatch, useSelector } from "react-redux";
import { fetchTripsAction } from "../storeToolkit/services/tripsSlice";
const captionTrip =
  "Посетите наши маршруты и поделитесь впечатлениями в разделе Заметки";

const CardsTripList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const dispatch = useDispatch();
  const routes = useSelector((state) => state.routes.items);

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  const updatePostsList = useCallback(() => {
    const response = getPagesPost(
      { page: pageCurrent, limit: pageSize },
      routes
    );
    setPagePostsList(response.tripPosts);
    setRecCount(response.recCount);
  }, [routes, pageCurrent, pageSize]);

  const getPosts = () => {
    dispatch(fetchTripsAction());
  };

  useEffect(getPosts, [dispatch]);
  useEffect(updatePostsList, [updatePostsList]);

  return (
    <div>
      <div className={classes["text-block"]}>
        <h2>{captionTrip}</h2>
      </div>
      <div className={classes.list}>
        {pagePostsList.map(({ userId, id, url, title, body }) => (
          <div key={id}>
            <CardTrip post={{ userId, id, url, title, body }} />
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

export default CardsTripList;
