var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

exports.addRSVP = function(request, response) {
  var rsvpEmail = request.body.rsvpEmail;
  //this will print to terminal whenever post made
  console.log(rsvpEmail);

  data.rsvp.push(rsvpEmail); //add to current data

  //let us send back som data so browser knows it worked
  response.send(rsvpEmail);
};
