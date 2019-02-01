const Joi = require('joi');
const registerDto = require('./dtos/register.dto');
const Account = require('../models/account');

exports.getHome = (req, res) => {
  return res.redirect('/login');
};

exports.getLogin = (req, res) => {
  return res.render('home/login');
};

exports.getRegister = (req, res) => {
  return res.render('home/register');
};

exports.postRegister = async (req, res) => {
  if (Joi.validate(req.body, registerDto).error !== null) {
    // Todo: Send flash messages with invalid schema message
    return res.render('home/register');
  }

  if (req.body.password !== req.body.repeatPassword) {
    // Todo: Send flash message with password do not match message
    return res.render('home/register');
  }

  const isEmailOrPhoneTaken = await Account.findOne().or(
    [ { email: req.body.email }, { phone: req.body.phone } ]
  );

  if (isEmailOrPhoneTaken) {
    // Todo: Send flash message with account taken message
    return res.render('home/register');
  }

  const account = new Account({ ...req.body });
  await account.save();

  return res.redirect('/login');
}
