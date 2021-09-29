const db = require('../models/TaskModel.js');

const loginController = {};

loginController.verifyLogin = (req, res, next) => {
  console.log('Orig Req Body --> ', req.body);
  const { username, password } = req.body;
  const queryStr = 'SELECT first_name, last_name, username, email FROM users WHERE username = $1 AND password = $2;';
  const queryVals = [username, password];
  db.query(queryStr, queryVals)
    .then(data => {
      console.log('Data from Postgres --> ', data.rows);
      res.locals.userInfo = data.rows[0] || {};
      console.log('Res Locals --> ', res.locals.userInfo);
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error in verifyLogin middleware',
        message: 'An error has occured while verifying login attempt'
      });
    });
};

module.exports = loginController;
