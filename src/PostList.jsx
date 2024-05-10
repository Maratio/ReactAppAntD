import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { BACKEND_URL, MAIN_PAGE_IMG_URL } from "./constants";

function PostList({
  posts, setPosts,
  pageCount, setPageCount
}) {


  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (selectedPage) => {
    axios.get(`${BACKEND_URL}/api/posts?page=${selectedPage}`)
      .then(response => {
        setPosts(response.data.posts);
        setPageCount(response.data.next ? selectedPage + 1 : selectedPage);
      })
      .catch(error => {
        console.error('Ошибка получения постов:', error);
      });
  };

  const handlePageClick = (data) => {
    fetchData(data.selected + 1);
  };


  const handleDeletePost = (id) => {
    axios.delete(`${BACKEND_URL}/api/posts/${id}`)
      .then(response => {
        console.log('Пост успешно удален');
        // Обновить список постов после удаления
        setPosts(posts.filter(post => post.id !== id));
      })
      .catch(error => {
        console.error('Ошибка удаления поста:', error);
      });
  };

  const handleEditPost = (post) => {
    // Реализуйте логику для открытия модального окна редактирования поста
    console.log('Редактирование поста:', post);
  };

  return (
    <div>
      <div>
        <h2 style={{ textAlign: 'center' }}>Посты</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <img src={MAIN_PAGE_IMG_URL} alt="Красивая картинка" style={{ width: '40%' }} />
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {posts?.map(post => (
            <li key={post.id} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
              <h3>{post.title}</h3>
              <img src={post.url} alt="Изображение" style={{ width: '200px', height: '200px', marginBottom: '1rem' }} />

              <p>{post.body}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: '#000' }}>Подробнее</Link>
                <div>
                  <button onClick={() => handleDeletePost(post.id)} style={{ marginRight: '0.5rem' }}>Удалить пост</button>
                  <button onClick={() => handleEditPost(post)}>Редактировать пост</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default PostList;