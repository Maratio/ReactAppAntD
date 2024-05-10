import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from "./constants";

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${BACKEND_URL}/api/posts`, { title, body, image: 'https://www.google.com/search?sca_esv=f65ab4fb82876b19&sca_upv=1&hl=ru&sxsrf=ACQVn0_xh5hX_xcoLHaBz-e59FJ27eARuQ:1713796388022&si=AKbGX_oBDfquzodaRrfbb9img4kPQ4fCBZjeqAiaW1svvC8uXkli6a-Xs9fWjm4uHjWgm-QudVaIaJK7HehJConvr4S2pbCed0S17x6nJ8EAtpc3BtPhJfrIa0-mRzvckU1fJiMEifEd8NbUy8LvU9qIWUjdotxu9VU0J5pPXJ5AWFfYKVavn2s7GXufe1tz57P7Y1Fl2ZIPVpTGgbieVN8l7veGxCiQtagi0OFfX9cn_6kskhSKdnWNyI_feGe0xsDz0vwC_rjyZo_IsHQ8lh3d9fuJAywvkTQ7AnLHNlt2cgxXsXHdmnBx382lJG_oJkeXyn-6Q7rZanxDgw6hC-vzfTAgjNqejx0fa-4HafrZSlQspPot0NA%3D&q=%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D1%8B%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C+%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B0%D1%8E%D1%89%D0%B5%D0%B9+%D1%81%D1%80%D0%B5%D0%B4%D1%8B&sa=X&ved=2ahUKEwiKm7OHhdaFAxVQIhAIHWs2CqgQs9oBKAB6BAgZEAI&cshid=1713796400422865' })
      .then(response => {
        console.log('Новый пост успешно создан:', response.data);
        setTitle('');
        setBody('');
      })
      .catch(error => {
        console.error('Ошибка создания поста:', error);
      });
  };

  return (
    <div>
      <h2>Создать новый пост</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={event => setTitle(event.target.value)}
          style={{ marginBottom: '1rem', padding: '0.5rem' }}
        />
        <textarea
          placeholder="Описание"
          value={body}
          onChange={event => setBody(event.target.value)}
          style={{ marginBottom: '1rem', padding: '0.5rem' }}
        ></textarea>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>Создать</button>
      </form>
    </div>
  );
}

export default NewPostForm;
