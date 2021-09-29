const db = require('../models/TaskModel.js');

const signupController = {};

signupController.createUser = (req, res, next) => {
  console.log('Orig Req Body --> ', req.body);
  const { first_name, last_name, username, email, password } = req.body;
  const queryStr = 'INSERT INTO users (first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *;';
  const queryVals = [first_name, last_name, username, email, password];
  db.query(queryStr, queryVals)
    .then(data => {
      console.log('Data from Postgres --> ', data.rows);
      res.locals.newUserInfo = data.rows[0];
      console.log('Res Locals --> ', res.locals.newUserInfo);
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error in createUser middleware',
        message: { err: 'An error has occured while creating new user account' }
      });
    });
};

module.exports = signupController;
