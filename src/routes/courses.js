const express = require('express');
const router = express.Router();

const courseControllers = require('../app/controllers/CourseControllers');

// newsControllers.index
router.post('/store', courseControllers.store);
router.get('/create', courseControllers.create);
router.get('/:slug', courseControllers.show);


module.exports = router; 