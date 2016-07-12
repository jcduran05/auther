var session = require('express-session')



app.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'supersecret' 
}));


module.exports = session