const router = require('express').Router()
const axios = require('axios')
//const Imgur = require('imgur-node')
// const imgur = require('imgur')
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
require('../../secrets')
//const client = new Imgur.Client(process.env.IMGUR_CLIENT_ID)
const {
  LZMA
} = require('/home/ann/Documents/04_BAM/build-a-mate/node_modules/lzma/src/lzma_worker.js')
const LZString = require('../../node_modules/lz-string/libs/lz-string.js')
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
    // const input = Object.keys(req.body)[0]
    // console.log('INPUT:', input)
    // const decompressed = LZString.decompressFromBase64(input)
    // console.log('DECOMPRESSED:', decompressed)
    let decompressed = ''
    LZMA.decompress(req.body, function(result, error) {
      if (error) {
        console.log(error)
      } else {
        console.log('Decompressed: ' + result)
        console.log('****************END*******************')
        decompressed = result
        console.log(decompressed)
      }
    })
    console.log(decompressed)
    const data = {
      album: id,
      title: 'test',
      name: 'xxx.png',
      image: decompressed
    }

    const img = await axios.post(`https://api.imgur.com/3/image`, data, config)
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
