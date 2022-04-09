const bcrypt = require('bcrypt')
const UserModel = require('../database/models/user')
const { GenericCrudController } = require('./GenericCrudController')

const SALT_ROUNDS = 10

function generatePassword (plainTextPassword) {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS)

  return bcrypt.hashSync(plainTextPassword, salt)
}

// function checkPassword (plainTextPassword: string, hashedPassword: string) {
//     return bcrypt.compareSync(plainTextPassword, hashedPassword);
// }

class UserController extends GenericCrudController {
  createDataMapper (req) {
    const newData = { ...req.body }

    newData.password = generatePassword(newData.password)

    return newData
  }
}

const controller = new UserController(UserModel, 'userId')

module.exports = controller
