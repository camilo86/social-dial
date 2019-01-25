exports.getHome = (req, res) => {
  return res.redirect('/login');
};

exports.getLogin = (req, res) => {
  return res.render('home/login');
};

exports.getRegister = (req, res) => {
  return res.render('home/register');
};
