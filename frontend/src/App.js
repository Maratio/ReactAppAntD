// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./SideBar.js";
import PostList from "./PostList.jsx";
import NewPostForm from "./NewPostForm.js";
import SearchBar from "./SearchBar.js";
import Post from "./Post.js";

function App() {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const onSearch = () => {};

  return (
    <Router>
      <div>
        <Header />
        <div style={{ padding: "1rem" }}>
          <Sidebar onSearch={onSearch} />

          <SearchBar style={{ margin: "1rem" }} />
          <Routes>
            <Route
              path="/"
              element={
                <PostList
                  posts={posts}
                  setPosts={setPosts}
                  pageCount={pageCount}
                  setPageCount={setPageCount}
                />
              }
            />
            <Route path="/new" element={<NewPostForm />} />
            <Route path="/post/:id" element={<Post />} />
            {/* Добавьте другие маршруты здесь */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
