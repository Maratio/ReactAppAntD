const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5002;
const POSTS_DB_PATH = path.join(__dirname, './db/db.posts.json')
const TRIPS_DB_PATH = path.join(__dirname, './db/db.routes.json')
const PHOTOS_DB_PATH = path.join(__dirname, './db/db.photos.json')
const COMMENTS_DB_PATH = path.join(__dirname, './db/db.comments.json')

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

// Получить все фотографии
app.get('/api/photos', (req, res) => {
  fs.readFile(PHOTOS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const posts = JSON.parse(data).photos;
    res.json(posts);
  });
});

// Получить один маршрут по ID
app.get('/api/routes/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile(TRIPS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const posts = JSON.parse(data).routes;
    const post = posts.find(post => post.id === postId);
    if (!post) {
      res.status(404).send('Пост не найден');
      return;
    }
    res.json(post);
  });
});

// Получить одно фото по ID
app.get('/api/photos/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile(PHOTOS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const posts = JSON.parse(data).photos;
    const post = posts.find(post => post.id === postId);
    if (!post) {
      res.status(404).send('Пост не найден');
      return;
    }
    res.json(post);
  });
});

// Создать новое фото
app.post('/api/photos', (req, res) => {
  fs.readFile(PHOTOS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }

    const photos = JSON.parse(data).photos;
    const postIdList = photos.map((item) => item.id)
    postIdList.sort((a, b) => Number(b) - Number(a))

    const newPost = {
      id: postIdList[0] + 1,
      url: req.body.url,
      title: req.body.title,
      albumId: Math.ceil(Math.random() * 3)
    };

    photos.push(newPost);
    fs.writeFile(PHOTOS_DB_PATH, JSON.stringify({ photos }), 'utf8', err => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        res.status(500).send('Ошибка сервера');
        return;
      }
      res.status(201).json(newPost);
    });
  })
});

// Удалить фото
app.delete('/api/photos/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile(PHOTOS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    let photos = JSON.parse(data).photos;
    photos = photos.filter(post => post.id !== postId);
    fs.writeFile(PHOTOS_DB_PATH, JSON.stringify({ photos }), 'utf8', err => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        res.status(500).send('Ошибка сервера');
        return;
      }
      res.status(204).send();
    });
  });
});

// Получить результаты поиска в фотографиях
app.get('/api/photos-search', (req, res) => {
  const searchTerm = req.query.term.toLowerCase()

  fs.readFile(PHOTOS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const photos = JSON.parse(data).photos;
    const searchResults = photos.filter(
      post =>
        post.title.toLowerCase().includes(searchTerm))
    res.json(searchResults);
  });
});

// Получить один пост по ID
app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile(POSTS_DB_PATH, 'utf8', (err, data) => {
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
  fs.readFile(POSTS_DB_PATH, 'utf8', (err, data) => {
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
      body: req.body.body,
      rate: req.body.rate
    };

    posts.push(newPost);
    fs.writeFile(POSTS_DB_PATH, JSON.stringify({ posts }), 'utf8', err => {
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
  fs.readFile(POSTS_DB_PATH, 'utf8', (err, data) => {
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
      url: req.body.url,
      title: req.body.title,
      body: req.body.body,
      rate: req.body.rate
    };
    posts[postIndex] = updatedPost;
    fs.writeFile(POSTS_DB_PATH, JSON.stringify({ posts }), 'utf8', err => {
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
  fs.readFile(POSTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    let posts = JSON.parse(data).posts;
    posts = posts.filter(post => post.id !== postId);
    fs.writeFile(POSTS_DB_PATH, JSON.stringify({ posts }), 'utf8', err => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        res.status(500).send('Ошибка сервера');
        return;
      }
      res.status(204).send();
    });
  });
});

// Получить результаты поиска в постах
app.get('/api/posts-search', (req, res) => {
  const searchTerm = req.query.term.toLowerCase()

  fs.readFile(POSTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const posts = JSON.parse(data).posts;
    const searchResults = posts.filter(
      post =>
        post.title.toLowerCase().includes(searchTerm)
        || post.body.toLowerCase().includes(searchTerm));
    res.json(searchResults);
  });
});


// Получить все комментарии
app.get('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const comments = JSON.parse(data).comments;
    res.json(comments);
  });
});

// Получить комментарии для конкретного поста
app.get('/api/posts/:postId/comments', (req, res) => {
  const postId = parseInt(req.params.postId);
  fs.readFile(COMMENTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }

    const comments = JSON.parse(data).comments;
    const postComments = comments.filter(comment => comment.postId === postId)
    if (!postComments) {
      res.status(404).send('Отзывы не найдены');
      return;
    }
    res.json(postComments);
  });
});

// Получить один комментарий по ID
app.get('/api/comments/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile(COMMENTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const comments = JSON.parse(data).comments;
    const comment = comments.find(post => post.id === postId);
    if (!comment) {
      res.status(404).send('Пост не найден');
      return;
    }
    res.json(comment);
  });
});


// Создать новый комментарий к посту
app.post('/api/posts/:postId/comments', (req, res) => {
  const postId = parseInt(req.params.postId);
  fs.readFile(COMMENTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }

    const comments = JSON.parse(data).comments;
    const postIdList = comments.map((item) => item.id)

    postIdList.sort((a, b) => Number(b) - Number(a))

    const newComment = {
      postId,
      id: postIdList[0] + 1,
      title: req.body.title,
      body: req.body.body,
      rate: req.body.rate
    };

    comments.push(newComment);
    fs.writeFile(COMMENTS_DB_PATH, JSON.stringify({ comments }), 'utf8', err => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        res.status(500).send('Ошибка сервера');
        return;
      }
      res.status(201).json(newComment);
    });
  })
});


// Удалить комментарий
app.delete('/api/comments/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile(COMMENTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    let comments = JSON.parse(data).comments;
    comments = comments.filter(post => post.id !== postId);
    fs.writeFile(COMMENTS_DB_PATH, JSON.stringify({ comments }), 'utf8', err => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        res.status(500).send('Ошибка сервера');
        return;
      }
      res.status(204).send();
    });
  });
});

// Удалить комментарии вместе с постом
app.delete('/api/comments/:postId/comment', (req, res) => {
  const postId = parseInt(req.params.postId);
  fs.readFile(COMMENTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    let comments = JSON.parse(data).comments;
    comments = comments.filter(post => post.postId !== postId);
    fs.writeFile(COMMENTS_DB_PATH, JSON.stringify({ comments }), 'utf8', err => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        res.status(500).send('Ошибка сервера');
        return;
      }
      res.status(204).send();
    });
  });
});

// Получить результаты поиска в комментариях
app.get('/api/comments-search', (req, res) => {
  const searchTerm = req.query.term.toLowerCase()

  fs.readFile(COMMENTS_DB_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    const comments = JSON.parse(data).comments;
    const searchResults = comments.filter(
      post =>
        post.title.toLowerCase().includes(searchTerm)
        || post.body.toLowerCase().includes(searchTerm));
    res.json(searchResults);
  });
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
