const User = require('../models/user.models');
const bcrypt = require('bcrypt');

module.exports = {
    getAllUsers: ((req, res) => {
        User.find().then((allUser) => {
                console.log(allUser)
                res.json(allUser)
            })
            .catch((err) => {
                console.log(err);
            })
    }),
    addUser: ((req, res) => {
        User.create(req.body)
            .then((newUser) => {
                console.log(newUser);
                res.json(newUser);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    }),
    login: async (req, res) => {
        try {
          var data = req.body;
          var userFind = await User.findOne({ userMail: data.userMail });
          if (userFind && await bcrypt.compare(data.userPassword, userFind.userPassword)) {
            res.status(200).json({ "exists": true });
          } else {
            res.status(200).json({ "exists": false });
          }
        } catch (error) {
          console.error('Error during login:', error);
          res.status(500).json({ "error": "Internal server error" });
        }
      }

}
