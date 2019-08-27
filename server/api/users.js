const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/matches/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    const matches = await User.findAll({
      where: {gender: user.genderPreference, genderPreference: user.gender},
      attributes: [
        'id',
        'firstName',
        'month',
        'day',
        'year',
        'summary',
        'photos',
        'bwFaceDesc'
      ]
    })
    res.send(matches)
  } catch (err) {
    next(err)
  }
})
