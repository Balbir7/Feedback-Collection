const Feedback = require('../models/feedbackModel');

exports.submitFeedback = async (req, res) => {
    try {
        const { name, rating, message } = req.body;

        if (!name || !rating || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const feedback = new Feedback({ name, rating, message });
        await feedback.save();

        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};