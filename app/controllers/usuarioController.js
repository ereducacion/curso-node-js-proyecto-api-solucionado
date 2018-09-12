const Usuario = require('../models/Usuario')

const create = (req, res) => {
  // recogemos los datos del body que nos interesen:
  const { email, password } = req.body
  const usuario = new Usuario({ email, password })
  usuario.save((err, usuario) => {
    if (err) {
      return res.status(400).json({
        message: 'Error al guardar el usuario',
        error: err
      })
    }
    return res.status(201).json(usuario)
  })
}

module.exports = {
  create
}
