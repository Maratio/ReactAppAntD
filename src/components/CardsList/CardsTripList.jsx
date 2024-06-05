import React, { useEffect, useState } from "react";
import CardTrip from "../Card/CardTrip";

import classes from "./CardsTripList.module.css";
import PaginationSite from "../UI/Pagination/PaginationSite";
import { BACKEND_URL } from "../../constants.js";


const CardsTripList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pageTripsList, setPageTripsList] = useState([]);

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  function getPost({ limit = 5, page = 1}, data) {
    return {
      recCount: data.length,
      trips: data.slice((page - 1) * limit, page * limit),
    };
  }

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/routes?`).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          const response = getPost({ page: pageCurrent, limit: pageSize },data);
          setPageTripsList(response.trips);
          setRecCount(response.recCount);
        });
      }
    });
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
