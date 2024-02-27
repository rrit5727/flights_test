const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create
  };

// async function create(req, res) {
//     const flight = await Flight.findById(req.params.id);
//     // We can push (or unshift) subdocs into Mongoose arrays
//     flight.tickets.push(req.body);
//     try {
//       // Save any changes made to the flight doc
//       await flight.save();
//     } catch (err) {
//       console.log(err);
//     }
//     // Step 5:  Respond to the Request (redirect if data has been changed)
//     res.redirect(`/flights/${flight._id}`);
//   }

async function create(req, res) {
    
    try {
      await Ticket.create(req.body);
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/flights`);//${flight._id} 'flight is undefined for some reason so can't redirect to show view 
  }

  //