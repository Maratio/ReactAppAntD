import React, { useCallback, useEffect, useState } from "react";
import CardPost from "../components/Card/CardPost.jsx";
import classes from "./CardsList.module.css";
import PaginationSite from "../components/UI/Pagination/PaginationSite.jsx";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { getCardsSearch, getPagesPost } from "../utils/fetch";
import Search from "antd/es/input/Search.js";
import { useDebounce } from "../customHooks/useDebounce.js";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostsAction,
  fetchPostsAction,
} from "../storeToolkit/services/postsSlice.js";
const caption = "Заметки по Маршрутам";

const CardsPostList = () => {
  const [recCount, setRecCount] = useState(0);
  const [pagePostsList, setPagePostsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const card = "posts";
  const [pageCurrent, pageSize, handleChangePaginator] = usePagination(isSearching);

  const updatePostsList = useCallback(
    (data = posts) => {
      const response = getPagesPost(
        { page: pageCurrent, limit: pageSize },
        data
      );
      setPagePostsList(response.tripPosts);
      setRecCount(response.recCount);
    },
    [posts, pageCurrent, pageSize]
  );

  const getPosts = () => {
    dispatch(fetchPostsAction());
  };

  const deletePost = (id) => {
    dispatch(deletePostsAction(id));
  };

  const onSearch = () => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      getCardsSearch(card, debouncedSearchTerm).then((response) => {
        if (response) {
          setIsSearching(false);
          updatePostsList(response);
        }
      });
    }
    updatePostsList();
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);

  useEffect(getPosts, [dispatch]);
  useEffect(onSearch, [debouncedSearchTerm, updatePostsList]);

  return (
    <div className={classes.content}>
      <div className={classes["btns-block"]}>
        <Button
          className={classes["btn-add"]}
          type="primary"
          onClick={() => navigate("/posts/new")}
        >
          Добавить Заметку
        </Button>
        <h2>{caption}</h2>
        <Search
          onChange={handleSearch}
          placeholder="Введите слово"
          style={{ width: 200 }}
          loading={isSearching}
        />
      </div>
      <div className={classes.list}>
        {pagePostsList.map(({ userId, id, url, title, body, rate }) => (
          <div key={id}>
            <CardPost
              deletePost={deletePost}
              post={{ userId, id, url, title, body, rate }}
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
