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
    req.flash('warning', 'Did you forget to fill up all the fields?');
    return res.render('home/register');
  }

  if (req.body.password !== req.body.repeatPassword) {
    req.flash('danger', 'Passwords do not match');
    return res.render('home/register');
  }

  const isEmailOrPhoneTaken = await Account.findOne().or(
    [ { email: req.body.email }, { phone: req.body.phone } ]
  );

  if (isEmailOrPhoneTaken) {
    req.flash('danger', 'Email and/or phone number already taken');
    return res.render('home/register');
  }

  const account = new Account({ ...req.body });
  await account.save();

  req.flash('success', 'Thanks for signing up! Please login to account');
  return res.redirect('/login');
}
