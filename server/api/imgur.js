const router = require('express').Router()
var imgur = require('imgur')
const axios = require('axios')
require('../../secrets')
module.exports = router

router.post('/uploadbwface', (req, res, next) => {
  try {
    imgur.setClientId(process.env.IMGUR_CLIENT_ID)

    // const id = 'qizwMyP'
    // const config = {
    //   headers: {
    //     Authorization: 'Bearer ' + process.env.IMGUR_ACCESS_TOKEN,
    //     Accept: 'application/json'
    //   }
    // }

    // console.log('REQ BODY:', req.body)
    // const data = {
    //   album: id,
    //   title: 'test',
    //   name: 'xxx.png',
    //   image: req.body
    // }
    const image = req.body.file
    imgur
      .uploadBase64(image)
      .then(function(json) {
        console.log(json.data.link)
      })
      .catch(function(err) {
        console.error(err.message)
      })
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
