const express = require('express');
const router = express.Router();

router.get('*', (req, res) => {
  res.send('Ultraviolet proxy backend placeholder.');
});

module.exports = router;