var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
	

module.exports = router;


// const newMovie = (req, res) => {
//   res.render('movies/new', { errorMsg: '' });
// };



// module.exports = {
//   new: newMovie,
//   create
// };