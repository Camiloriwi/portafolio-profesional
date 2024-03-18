const express = require('express');

const router = express.Router();
const userNotas = require('../controllador/controll');
// const { get } = require('http');


router.get('/api/all/notes', userNotas.getNotas);

router.get('/api/all/notes/n', userNotas.getNotas1);

router.post('/api/all/notes', userNotas.createNotes);

router.post('/api/all/notes/user', userNotas.createNotes);

module.exports = router;









