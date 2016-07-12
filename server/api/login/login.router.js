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
		console.log(data)
		if(!data){
			res.sendStatus(401);
		} else {
			req.session.userId = data.id;
			res.sendStatus(204);
		}
	})
	.catch(next);
})


module.exports = router