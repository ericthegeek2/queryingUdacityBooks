import {getAll,get,update,search} from "./controllers";
const express = require('express')
const router = express.Router()


router.get('/status', fetch)

router.get('/books', getAll)

router.get('/books/:id',get)

router.put(`/books/:id { shelf }`,update)

router.post(`/search { query, maxResults }`, search)


module.exports = router

