import React, { useEffect, useState } from "react";
import CardTrip from "../Card/CardTrip";
import classes from "./CardsTripList.module.css";
import PaginationSite from "../UI/Pagination/PaginationSite";
import { getCardsCall } from "../../utils/utils";

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
    getCardsCall(card, setPageTripsList, setRecCount, pageCurrent, pageSize);
  };

  useEffect(getTrips, [pageCurrent, pageSize]);

  return (
    <div>
      <div className={classes["text-block"]}>
        <h2>
          Посетите наши маршруты и поделитесь впечатлениями в разделе Заметки
        </h2>
      </div>
      <div className={classes._}>
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
