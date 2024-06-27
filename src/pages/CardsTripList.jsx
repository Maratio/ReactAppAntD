import React, { useEffect, useState } from "react";
import CardTrip from "../components/Card/CardTrip";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite";
import { getCards, getPagesPost } from "../utils/fetch";

const CardsTripList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pageTripsList, setPageTripsList] = useState([]);

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }
  const card = "routes";

  const getTrips = () => {
    getCards(card).then((data) => {
      const response = getPagesPost(
        { page: pageCurrent, limit: pageSize },
        data
      );
      setPageTripsList(response.tripPosts);
      setRecCount(response.recCount);
    });
  };

  useEffect(getTrips, [pageCurrent, pageSize]);

  return (
    <div>
      <div className={classes["text-block"]}>
        <h2>
          Посетите наши маршруты и поделитесь впечатлениями в разделе Заметки
        </h2>
      </div>
      <div className={classes.list}>
        {pageTripsList.map(({ userId, id, url, title, body }) => (
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
