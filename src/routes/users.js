const express = require('express');
const router = express.Router();
const logger = require('../lib/logger');
const error = require('../lib/error');

router.get('/', async (req, res) => {
    try {
      logger.global.info('GET /api/users');
      res.json({ message: 'GET /api/users' });
    } catch (e) {
        res.status(500).json({ error: error.InternalError(e) });
    }
});

module.exports = router;
