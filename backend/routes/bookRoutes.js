const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: 'Parâmetro de busca "q" é obrigatório.' });

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const books = response.data.items.map(item => ({
      id: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors?.join(', ') || 'Autor desconhecido',
      description: item.volumeInfo.description || 'Sem descrição',
      cover: item.volumeInfo.imageLinks?.thumbnail || '',
      categories: item.volumeInfo.categories || [],
    }));
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar livros da API.' });
  }
});

module.exports = router;