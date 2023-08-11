const express = require('express');
const {createAuthorController,listAuthorController} = require('../controllers/authors');
const router = express.Router()





router.post('/author', createAuthorController)
router.get('/authors', listAuthorController)


module.exports = router
