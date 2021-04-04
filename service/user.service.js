const { User } = require('../dataBase/models');

module.exports = {
    findAll: () => User.findAll(),
    findOne: (id) => User.findById(id),
    createOne: (userObject) => User.create(userObject),
    deleteOne: (id) => User.findByIdAndDelete(id)
};
