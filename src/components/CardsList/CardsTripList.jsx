import React, { useEffect, useState } from "react";
import CardTrip from "../Card/CardTrip";
import data from "../../data.json";
import classes from "./CardsTripList.module.css";
import PaginationSite from "../UI/Pagination/PaginationSite";

const CardsTripList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pageTripsList, setPageTripsList] = useState([]);

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  function getTrip({ limit = 5, page = 1 }) {
    return {
      recCount: data.posts.length,
      trips: data.posts.slice((page - 1) * limit, page * limit),
    };
  }

  useEffect(() => {
    const response = getTrip({ page: pageCurrent, limit: pageSize });
    setPageTripsList(response.trips);
    setRecCount(response.recCount);
  }, [pageCurrent, pageSize]);

  return (
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
  );
};

export default CardsTripList;
