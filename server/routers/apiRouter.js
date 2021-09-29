const express = require('express');
const cardController = require('../controllers/cardController.js');
const applicantsController = require('../controllers/applicantsController.js');

const router = express.Router();

//get request for card data on dashboard
router.get('/',
  cardController.getCards,
  (req, res) => res.status(200).json(res.locals.cardsInfo)
);

//post request for new card
router.post('/',
  cardController.addCard,
  (req, res) => res.status(200).json(res.locals.newCardInfo)
);

//get request for specific company to populate display
router.get('/company',
  applicantsController.getApplicants,
  (req, res) => res.status(200).json(res.locals.applicantsInfo)
);

//post request to add new applicant to a company card
router.post('/company',
  applicantsController.addApplicant,
  (req, res) => res.status(200).json(res.locals.newApplicantInfo)
);

module.exports = router;
