var router = require('express').Router();
var HttpError = require('../../utils/HttpError');
// var Story = require('./story.model');
var User = require('../users/user.model')

router.post('/', function(req, res, next){
	var password = req.body.password
	var email = req.body.email
	User.findOne({
		where: req.body
	})
	.then(function(data){
		if (!data){
			res.sendStatus(401);
		} else {
			req.session.userId = data.id;
			console.log('user logged in, this is req.sess: ', req.session);
			console.log('req obj: ', req.sessionStore);
			res.sendStatus(204);
		}
	})
	.catch(next);
})

module.exports = router
