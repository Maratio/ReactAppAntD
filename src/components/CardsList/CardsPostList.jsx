import React, { useEffect, useState } from "react";
import CardPost from "../Card/CardPost.jsx";
import classes from "./CardsTripList.module.css";
import PaginationSite from "../UI/Pagination/PaginationSite";
import { BACKEND_URL } from "../../constants.js";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const CardsPostList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const navigate = useNavigate();

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  function getPagesPost({ limit = 5, page = 1 }, data) {
    return {
      recCount: data.length,
      tripPosts: data.slice((page - 1) * limit, page * limit),
    };
  }

  function getPosts() {
    fetch(`${BACKEND_URL}/api/posts?`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            const response = getPagesPost(
              { page: pageCurrent, limit: pageSize },
              data
            );
            setPagePostsList(response.tripPosts);
            setRecCount(response.recCount);
          });
        }
      })
      .catch((err) => console.error("error >>>>>", err));
  }

  const deletePost = (postId) => {
    fetch(`${BACKEND_URL}/api/posts/${postId}?`, { method: "DELETE" })
      .then((response) => {
        if (response.status === 204) {
          getPosts();
        }
      })
      .catch((err) => console.error("error >>>>>", err));
  };

  useEffect(getPosts, [pageCurrent, pageSize]);

  return (
    <div>
      <div className={classes["btns-block"]}>
        <Button
          className={classes["btn-add"]}
          type="primary"
          onClick={() => navigate("/posts/new")}
        >
          Добавить Заметку
        </Button>
      </div>
      <div className={classes._}>
        {pagePostsList.map(({ userId, id, url, title, body }) => (
          <div key={id}>
            <CardPost
              deletePost={deletePost}
              post={{ userId, id, url, title, body }}
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

export default CardsPostList;
