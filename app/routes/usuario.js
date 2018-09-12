const router = require('express').Router()
const usersController = require('../controllers/usuarioController')

router.post('/', (req, res) => {
  usersController.create(req, res)
})

module.exports = router
