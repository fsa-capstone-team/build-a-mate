const router = require('express').Router()
const axios = require('axios')
require('../../secrets')
module.exports = router

router.post('/uploadbwface', async (req, res, next) => {
  try {
    const id = 'qizwMyP'
    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.IMGUR_ACCESS_TOKEN,
        Accept: 'application/json'
      }
    }

    console.log('REQ BODY:', req.body)
    const data = {
      album: id,
      title: 'test',
      name: 'xxx.png',
      image: req.body
    }

    const img = await axios.post(`https://api.imgur.com/3/upload`, data, config)
    res.send(img.data)
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
