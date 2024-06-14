const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { paginateResults } = require('./utils/utils');
const comments = require('./db/db.comments.json');
const app = express();
const PORT = process.env.PORT || 5002;
const POSTS_DB_PATH = path.join(__dirname, './db/db.posts.json')
const TRIPS_DB_PATH = path.join(__dirname, './db/db.routes.json')


app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'my-blog/build')));


// Получить все посты
app.get('/api/posts', (req, res) => {
  fs.readFile(POSTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const posts = JSON.parse(data).posts;
    res.json(posts);
  });
});

// Получить все маршруты
app.get('/api/routes', (req, res) => {
  fs.readFile(TRIPS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const posts = JSON.parse(data).routes;
    res.json(posts);
  });
});

// Получить один пост по ID
app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile(path.join(__dirname, './db/db.posts.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const posts = JSON.parse(data).posts;
    const post = posts.find(post => post.id === postId);
    if (!post) {
      res.status(404).send('Пост не найден');
      return;
    }
    res.json(post);
  });
});

// Создать новый пост
app.post('/api/posts', (req, res) => {
  fs.readFile(path.join(__dirname, './db/db.posts.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }

    const posts = JSON.parse(data).posts;
    const postIdList = posts.map((item) => item.id)
    const postUserIdList = posts.map((item) => item.userId)

    postIdList.sort((a, b) => Number(b) - Number(a))
    postUserIdList.sort((a, b) => Number(b) - Number(a))


    function generatorUserId() {
      let id = 1
      for (let userId of postUserIdList) {
        if (id !== userId) {
          return id
        }
        id++
      }
    }

    const newPost = {
      userId: generatorUserId(),
      id: postIdList[0] + 1,
      url: req.body.url,
      title: req.body.title,
      body: req.body.body
    };

    posts.push(newPost);
    fs.writeFile(path.join(__dirname, './db/db.posts.json'), JSON.stringify({ posts }), 'utf8', err => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        res.status(500).send('Ошибка сервера');
        return;
      }
      res.status(201).json(newPost);
    });
  })
});

// Обновить существующий пост
app.put('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile(path.join(__dirname, './db/db.posts.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const posts = JSON.parse(data).posts;
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex === -1) {
      res.status(404).send('Пост не найден');
      return;
    }
    const updatedPost = {
      userId: posts[postIndex].userId,
      id: postId,
      url: posts[postIndex].url,
      title: req.body.title,
      body: req.body.body    
    };
    posts[postIndex] = updatedPost;
    fs.writeFile(path.join(__dirname, './db/db.posts.json'), JSON.stringify({ posts }), 'utf8', err => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        res.status(500).send('Ошибка сервера');
        return;
      }
      res.json(updatedPost);
    });
  });
});

// Удалить пост
app.delete('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile(path.join(__dirname, './db/db.posts.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    let posts = JSON.parse(data).posts;
    posts = posts.filter(post => post.id !== postId);
    fs.writeFile(path.join(__dirname, './db/db.posts.json'), JSON.stringify({ posts }), 'utf8', err => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        res.status(500).send('Ошибка сервера');
        return;
      }
      res.status(204).send();
    });
  });
});

// Получить результаты поиска с пагинацией
app.get('/api/posts/search', (req, res) => {
  const searchTerm = req.query.term.toLowerCase();
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  fs.readFile(path.join(__dirname, './db/db.posts.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const posts = JSON.parse(data).posts;
    const searchResults = posts.filter(post => post.title.toLowerCase().includes(searchTerm) || post.body.toLowerCase().includes(searchTerm));
    const paginatedResults = paginateResults(searchResults, page, limit);
    res.json(paginatedResults);
  });
});


// Получить комментарии для конкретного поста
app.get('/api/posts/:postId/comments', (req, res) => {
  const postId = parseInt(req.params.postId);

  const postComments = comments.filter(comment => comment.postId === postId);

  res.json(postComments);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
