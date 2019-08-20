const router = require('express').Router()
const axios = require('axios')
//const Imgur = require('imgur-node')
// const imgur = require('imgur')
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
require('../../secrets')
//const client = new Imgur.Client(process.env.IMGUR_CLIENT_ID)
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
    //const img = await axios.post(`https://api.imgur.com/3/album/${id}/add`, req.body, config)
    const img = await axios.post(`https://api.imgur.com/3/image`, data, config)
    //console.log(img.config)
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

    // METHOD 1 : XML HTTP
    // const XHR = new XMLHttpRequest()
    // XHR.open('GET', `https://api.imgur.com/3/album/${id}/images`, true); // true for asynchronous
    // XHR.setRequestHeader('Authorization', 'Bearer ' + process.env.IMGUR_ACCESS_TOKEN)
    // XHR.setRequestHeader('Accept', 'application/json')
    // await XHR.send();
    // console.log(XHR)
    // console.log('STATE:', XHR.readyState)
    // console.log('RES TEXT:', XHR.responseText)

    // if (req.readyState == 4 && req.status === 200) {
    //   console.log(XHR)
    //   console.log('STATE:', XHR.readyState)
    //   console.log('RES TEXT:', XHR.responseText)
    //   const json = JSON.parse(XHR.responseText)
    //   console.log(json)
    //   res.send(json)
    // } else {
    //   console.log('Error with Imgur Request.')
    //   res.sendStatus(500)
    // }

    // LIB IMGUR
    // const album = await imgur.getAlbumInfo(id)
    // console.log(album)

    // res.send(album)
  } catch (err) {
    next(err)
  }
})
