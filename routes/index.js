var express = require('express');
var router = express.Router();
const path = require('path');
const getstudent = require('../api/student_details')
const getGallery = require('../api/show_gallery')
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
  
router.post('/studentdetail', getstudent.getStudentDetails)
router.get('/galleryfiles', getGallery.getallfilepath);
module.exports = router;