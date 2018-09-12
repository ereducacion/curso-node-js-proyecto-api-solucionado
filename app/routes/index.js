const router = require('express').Router()
const cervezasRouter = require('./cervezas')
const usersRouter = require('./usuario')
router.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a nuestra api' })
})

router.use('/cervezas', cervezasRouter)
router.use('/usuario', usersRouter)

module.exports = router
