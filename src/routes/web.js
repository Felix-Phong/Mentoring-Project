const express = require('express');
const {getHomepage,getTestpage} = require('../controllers/homeControllers')
const router =express.Router();



router.get('/',getHomepage);
router.get('/test',getTestpage);

  


module.exports = router;