const router = require('express').Router()
const axios = require('axios')
const Imgur = require
module.exports = router

router.post('/uploadbwface', async (req, res, next) => {
  try {
    // await axios.post('https://api.imgur.com/3/image', {
    //   headers: {
    //     Authorization: 'Bearer ' + token,
    //     Accept: 'application/json'
    //   },
    //   data: {
    //     image: req.body,
    //     type: 'base64'
    //   }
    // })
  } catch (err) {
    next(err)
  }
})
