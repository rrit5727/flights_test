const Flight = require('../models/flight');



async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
  }

  function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: ''});
  }

async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', { title: 'Flight Detail', flight} )
}


  const create = async (req, res) => {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
};

module.exports = {
    index,
    new: newFlight,
    create,
    show 
  };