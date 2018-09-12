const { ObjectID } = require('mongodb')

const userOneId = new ObjectID()
const userTwoId = new ObjectID()

const Usuario = require('../app/models/Usuario')

const usuario = [
  {
    _id: userOneId,
    email: 'prueba@prueba.com',
    password: 'password1'
  },
  {
    _id: userTwoId,
    email: 'prueba2@prueba.com',
    password: 'password2'
  }
]

// cargar la lista de usuarios para realizar los test
const loadUsers = done => {
  Usuario.deleteMany({})
    .then(() => {
      const userOne = new Usuario(usuario[0]).save()
      const userTwo = new Usuario(usuario[1]).save()
      return Promise.all([userOne, userTwo]) // cuando se cumplan estas dos promesas, seguiré?
    })
    .then(() => done())
}

module.exports = { loadUsers, usuario }
