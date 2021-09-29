const db = require('../models/TaskModel.js');

const cardController = {};

cardController.getCards = (req, res, next) => {
  const queryStr = 'SELECT * FROM companies;'
  db.query(queryStr)
    .then(data => {
      console.log('Data from Postgres --> ', data.rows);
      res.locals.cardsInfo = data.rows;
      console.log('Res Locals --> ', res.locals.cardsInfo);
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error in getCards middleware',
        message: { err: 'An error has occured while getting card info' }
      });
    });
};

cardController.addCard = (req, res, next) => {
  console.log('Orig Req Body --> ', req.body);
  const { name, url } = req.body;
  const queryStr = 'INSERT INTO companies (name, currently_applying, successful_applicants, rejected_applicants, url) VALUES ($1, 0, 0, 0, $2) RETURNING *;';
  const queryVals = [name, url];
  db.query(queryStr, queryVals)
    .then(data => {
      console.log('Data from Postgres --> ', data.rows);
      res.locals.newCardInfo = data.rows[0];
      console.log('Res Locals --> ', res.locals.newCardInfo);
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error in addCard middleware',
        message: { err: 'An error has occured while adding new card info' }
      });
    });
};

module.exports = cardController;
