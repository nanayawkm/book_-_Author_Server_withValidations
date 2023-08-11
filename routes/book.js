const express = require('express')
const {body} = require('express-validator')
const { listbookController, createbookController,updatebookController,deleteBookController} = require('../controllers/books')
const router = express.Router()


router.get('/book/:id?', listbookController)
router.post('/book', [
    body('title').trim().not().isEmpty().withMessage('Name cannot be empty'),
    body('description').trim().not().isEmpty().withMessage('Description cannot be empty'),
    body('country').trim().not().isEmpty().withMessage('Country cannot be empty'),

        ], createbookController)
router.put('/book', updatebookController)
router.delete('/book', deleteBookController)


module.exports = router