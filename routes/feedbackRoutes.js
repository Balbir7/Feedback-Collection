const express = require('express');
const router = express.Router();
const { submitFeedback, getAllFeedbacks } = require('../controllers/feedbackController');

router.post('/feedback', submitFeedback);

router.get('/feedback', getAllFeedbacks);

module.exports = router;