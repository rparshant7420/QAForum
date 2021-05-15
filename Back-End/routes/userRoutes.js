var myctrl = require('../controllers/userController');
var credenCtrl = require('../controllers/addCredentials');
var ansCtrl = require('../controllers/addAnswer');

const express = require('express');

var appRoute = express.Router();

// USERS

appRoute.post('/AddingYou',myctrl.AddUsers);
appRoute.post('/loggingin',myctrl.authenticate);
appRoute.get('/userinfo/:id',myctrl.GetUsers);
appRoute.put('/updatingYou/:userid',myctrl.updatedUsers);

//  QUESTIONS

appRoute.post('/addingQue',myctrl.addQue);
appRoute.get('/questionInfo/:_id',myctrl.getQuestion);
appRoute.get('/UserQusetions/:_id',myctrl.getQuestions);

// ANSWERS

appRoute.post('/addingAns',ansCtrl.addAnswer);
appRoute.get('/answerInfo/:ansId',ansCtrl.getAnswer);

// CREDENTIALS

appRoute.post('/addingCredentials',credenCtrl.Addcredentials);
appRoute.get('/credentialInfo/:userID',credenCtrl.FindCredentials);

module.exports = appRoute;
