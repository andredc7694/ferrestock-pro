const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

const authMiddleware = require('../middlewares/authMiddleware');
router.get('/me', authMiddleware, (req, res) => {
    res.json({ success: true, user: req.user });
});

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;