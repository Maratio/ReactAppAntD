import React, { useCallback, useEffect, useState } from "react";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import {
  deleteCard,
  getCards,
  getCardsFilter,
  getCardsSearch,
  getPagesPost,
} from "../utils/fetch.js";
import CardComment from "../components/Card/CardComment.jsx";
import { Button, Space, Select, ConfigProvider } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Search from "antd/es/input/Search.js";
const captionComments = `Отзывы на Заметки`;
const card = "comments";

const CardsCommentList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const navigate = useNavigate();
  const { postId } = useParams();
  const [items, setItems] = useState([]);
  const caption = `Отзывы к Заметке #${postId}`;

  function handleChangePaginator(newPageCurrent, newPageSize) {
    if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
    if (pageSize !== newPageSize) setPageSize(newPageSize);
  }

  const updatePostsList = useCallback(
    (data) => {
      const response = getPagesPost(
        { page: pageCurrent, limit: pageSize },
        data
      );
      setPagePostsList(response.tripPosts);
      setRecCount(response.recCount);
    },
    [pageCurrent, pageSize]
  );

  function getComments() {
    if (postId) {
      getCardsFilter(card, postId).then((data) => {
        updatePostsList(data);
      });
    } else {
      getCards(card).then((data) => {
        const arr = data.map((post) => post.postId);
        const itemsComment = [...new Set(arr.sort((a, b) => a - b))].map(
          (postId) => {
            return {
              key: postId,
              label: `Заметка #${postId}`,
              value: `/posts/${postId}/comments`,
            };
          }
        );
        setItems(itemsComment);
        updatePostsList(data);
      });
    }
  }

  const deleteComment = (id) => {
    deleteCard(card, id).then((response) => {
      if (response) {
        getComments();
      }
    });
  };

  const handleChangeSelect = (value) => {
    navigate(value);
  };

  const onSearch = (data) => {
    getCardsSearch(card, data).then((response) => {
      if (response) {
        updatePostsList(response);
      }
    });
  };

  useEffect(getComments, [postId, pageCurrent, pageSize, updatePostsList]);

  return (
    <div className={classes.content}>
      <div className={classes["btns-block"]}>
        {postId ? (
          <Button
            className={classes["btn-add"]}
            type="primary"
            onClick={() => navigate(`/comments/${postId}/new`)}
          >
            Добавить Отзыв
          </Button>
        ) : (
          <Space direction="vertical">
            <Space wrap>
              <ConfigProvider
                theme={{
                  token: {
                    colorBgContainer: "#1677ff",
                    colorTextPlaceholder: "#fff",
                    colorText: "#1677ff",
                    fontWeightStrong: 600,
                    lineWidth: 0,
                  },
                }}
              >
                <Select
                  placeholder={"Выберите Заметку"}
                  onChange={handleChangeSelect}
                  style={{
                    width: "auto",
                  }}
                  options={items}
                />
              </ConfigProvider>
            </Space>
          </Space>
        )}
        {postId ? <h2 style={{right:400}}>{caption}</h2> : <h2>{captionComments}</h2>}
        {!postId && (
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            style={{ width: 200 }}
          />
        )}
      </div>
      <div className={classes.list}>
        {pagePostsList.map(({ postId, id, title, body, rate }) => (
          <div key={id}>
            <CardComment
              deletePost={deleteComment}
              post={{ postId, id, title, body, rate }}
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

export default CardsCommentList;
