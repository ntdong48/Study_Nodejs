const express = require('express');
const router = express.Router();

const meControllers = require('../app/controllers/MeControllers');

// newsControllers.index
router.post('/courses/store', meControllers.coursesStore);


module.exports = router; 