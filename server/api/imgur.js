const router = require('express').Router()
const axios = require('axios')
//const Imgur = require('imgur-node')
const imgur = require('imgur')
require('../../secrets')
//const client = new Imgur.Client(process.env.IMGUR_CLIENT_ID)
module.exports = router

router.post('/uploadbwface', async (req, res, next) => {
  try {
    // imgur.setClientId(process.env.IMGUR_CLIENT_ID)
    // const id = 'qizwMyP'
    // imgur.setAPIUrl(`https://api.imgur.com/3/album/${id}/images`)

    // imgur.setCredentials(process.env.IMGUR_EMAIL, process.env.IMGUR_PASSWORD, process.env.IMGUR_CLIENT_ID)

    // const img = await imgur.uploadFile('/home/ann/Documents/04_BAM/build-a-mate/public/image/test-face2.png', id)
    // console.log('LINK:', img)
    const album = 'qizwMyP'
    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.IMGUR_ACCESS_TOKEN
        // Accept: 'application/json'
      }
    }
    const data = req.body
    // console.log(data)
    const img = await axios.post(
      `https://api.imgur.com/3/album/${album}/add`,
      data,
      config
    )
    console.log(img)
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.get('/bw', async (req, res, next) => {
  try {
    const id = 'qizwMyP'
    const album = await axios.get(`https://api.imgur.com/3/album/${id}`)
    // const album = await imgur.getAlbumInfo(id)
    console.log(album)
    res.send(album)
  } catch (err) {
    next(err)
  }
})
