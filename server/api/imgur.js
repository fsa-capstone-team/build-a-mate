const router = require('express').Router()
var imgur = require('imgur')
const axios = require('axios')
require('../../secrets')
const User = require('../db/models/user')
module.exports = router

router.post('/uploadbwface/:id', async (req, res, next) => {
  try {
    imgur.setClientId(process.env.IMGUR_CLIENT_ID)
    imgur.setCredentials(
      process.env.IMGUR_EMAIL,
      process.env.IMGUR_PASSWORD,
      process.env.IMGUR_CLIENT_ID
    )

    // CONVERT TO GRAYSCALE //

    const image = req.body.file
    const id = 'qizwMyP'
    let bwPhoto = ''

    // UPLOAD TO IMGUR -> GET PHOTO ID
    await imgur
      .uploadBase64(image, id)
      .then(function(json) {
        bwPhoto = json.data.link
          .split('https://i.imgur.com/')[1]
          .split('.png')[0]
      })
      .catch(function(err) {
        console.error(err.message)
      })

    // ADD PHOTO ID TO USER INSTANCE
    const user = await User.findByPk(req.params.id)
    console.log(user)
    console.log('LINK:', bwPhoto)
    await user.update({bwPhoto})
    console.log(user)
    res.send(user)
  } catch (err) {
    next(err)
  }
})

router.get('/bw', async (req, res, next) => {
  try {
    const id = 'qizwMyP'
    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.IMGUR_ACCESS_TOKEN,
        Accept: 'application/json'
      }
    }

    // AXIOS
    const images = await axios.get(
      `https://api.imgur.com/3/album/${id}/images`,
      config
    )
    console.log('IMGES:', images.data)
    res.send(images.data)
  } catch (err) {
    next(err)
  }
})
