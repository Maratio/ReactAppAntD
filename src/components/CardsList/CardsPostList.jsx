import React, { useEffect, useState } from "react";
import CardPost from "../Card/CardPost.jsx";
import classes from "./CardsTripList.module.css";
import PaginationSite from "../UI/Pagination/PaginationSite";
import { Button } from "antd";
import { Flex } from "antd";
import { BACKEND_URL } from "../../constants.js";

const CardsPostList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  function getPagesPost({ limit = 5, page = 1}, data) {
    return {
      recCount: data.length,
      tripPosts: data.slice((page - 1) * limit, page * limit),
    };
  }

  function getPosts(){
    fetch(`${BACKEND_URL}/api/posts?`, {method: 'GET'}).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          console.log(data);
          const response = getPagesPost({ page: pageCurrent, limit: pageSize },data);
          setPagePostsList(response.tripPosts);
          setRecCount(response.recCount);
        });
      }
  })
}

const delPostFromListCard = (postId) => {
  console.log('privvvvveee');
  fetch(`${BACKEND_URL}/api/posts/${postId}?`, {method: 'DELETE'}).then((response) => {
        if (response.status === 204) {;
          getPosts()
        }
})
}

  useEffect(getPosts,[pageCurrent, pageSize])

  return (
    <div>
      <div className={classes.btns_block}>
        <Flex gap="small">
          <Button type="primary">Добавить отчет</Button>
        </Flex>
        {/* <button>Privet</button>
        <button>Privet</button>
        <button>Privet</button> */}
      </div>
      <div className={classes._}>
        {pagePostsList.map(({ userId, id, url, title, body }) => (
          <div key={id}>
            <CardPost delPostFromListCard = {delPostFromListCard} post={{ userId, id, url, title, body }} />
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

export default CardsPostList;
