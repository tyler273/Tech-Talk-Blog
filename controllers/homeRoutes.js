const router = require('express').Router();
const { Post, User } = require('../models')

router.get('/', async (req, res) => {
    try {

        res.render('homepage')
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/profile');
            return;
          }
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;