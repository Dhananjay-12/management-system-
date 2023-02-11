const homeRoutes = (req, res) => {
  res.render('index');
};

const addUser = (req, res) => {
  res.render('add_user');
};

const updateUser = (req, res) => {
  res.render('update_user');
};

module.exports = { homeRoutes, addUser, updateUser };
