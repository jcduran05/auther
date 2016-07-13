var router = require('express').Router();
var HttpError = require('../../utils/HttpError');

var User = require('../users/user.model')

router.get('/', function(req, res, next){
	req.session.userId = null;

	console.log(req.session)
	res.send('done')
})

module.exports = router
