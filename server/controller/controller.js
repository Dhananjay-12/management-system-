const Userdb = require('./../model/model');

/////////////////CREATING A NEW USER/////////////////
////////////////////////////////////////////////////
exports.create = (req, res) => {
  if (!req.body) {
    res.send(400).send({ message: 'Input fields cannot be empty!' });
    return;
  }
  //initialising new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  //saving new user to database
  user
    .save(user)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || 'Some error occured while creating the user profile',
      })
    );
};

////////////////SEARCHING A  USER/////////////////
////////////////////////////////////////////////////
exports.find = (req, res) => {
  Userdb.find()
    .then((user) => res.send(user))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Could not load data..',
      });
    });
};
////////////////Updating A  USER/////////////////
////////////////////////////////////////////////////
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Could not update with empty input fields',
    });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message:
            'Could not update user with id ' + id + ' Maybe user not found',
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error occured while updating the user',
      });
    });
};
////////////////Updating A  USER/////////////////
////////////////////////////////////////////////////
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: 'Data does not exist',
        });
      } else {
        res.send({
          message: 'Data successfully deleted',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error occured while deleting the user',
      });
    });
};
