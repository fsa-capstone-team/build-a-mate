const router = require('express').Router()
var imgur = require('imgur')
const axios = require('axios')
require('../../secrets')
const User = require('../db/models/user')
const faceapi = require('face-api.js')
module.exports = router

//ONLY FOR DEMO
router.post('/demoUpload/:id', async (req, res, next) => {
  try {
    imgur.setClientId(process.env.IMGUR_CLIENT_ID)
    imgur.setCredentials(
      process.env.IMGUR_EMAIL,
      process.env.IMGUR_PASSWORD,
      process.env.IMGUR_CLIENT_ID
    )

    const image = req.body.src.split(',')[1]
    const id = 'qizwMyP'
    let link = ''

    // UPLOAD TO IMGUR -> GET PHOTO ID
    await imgur
      .uploadBase64(image, id)
      .then(function(json) {
        link = json.data.link
        console.log('LINK1:', link)
      })
      .catch(function(err) {
        console.error(err.message)
      })
    console.log('LINK2:', link)

    // SAVE FACE USER ALBUM
    console.log('HERE!')
    const user = await User.findByPk(req.params.id)
    const array = user.photos
    array.unshift(link)
    console.log(user)
    await user.update({photos: array})
    console.log('USER:', user)
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.post('/bwFaceDesc/:id', async (req, res, next) => {
  try {
    // imgur.setClientId(process.env.IMGUR_CLIENT_ID)
    // imgur.setCredentials(
    //   process.env.IMGUR_EMAIL,
    //   process.env.IMGUR_PASSWORD,
    //   process.env.IMGUR_CLIENT_ID
    // )

    // // CONVERT TO GRAYSCALE //

    // const image = req.body.file
    // const id = 'qizwMyP'
    // let link = ''

    // // UPLOAD TO IMGUR -> GET PHOTO ID
    // await imgur
    //   .uploadBase64(image, id)
    //   .then(function(json) {
    //     link = json.data.link
    //   })
    //   .catch(function(err) {
    //     console.error(err.message)
    //   })

    // // FACE API CALCULATIONS
    // await faceapi.loadFaceRecognitionModel('/models')
    // //const img = await faceapi.fetchImage(link)
    // const bwFace = await faceapi.computeFaceDescriptor(img)
    // console.log('desc:', bwFace)

    // SAVE FACE DESCRIPTOR TO USER INSTANCE
    console.log('HERE!')
    console.log(req.body.faceDesc)
    const bwFaceDesc = JSON.stringify(req.body.faceDesc)
    const user = await User.findByPk(req.params.id)
    console.log(user)
    await user.update({bwFaceDesc})
    console.log('USER:', user)
    res.send(user)
  } catch (err) {
    next(err)
  }
})

router.post('/createdFaceDesc/:id', async (req, res, next) => {
  try {
    // imgur.setClientId(process.env.IMGUR_CLIENT_ID)
    // imgur.setCredentials(
    //   process.env.IMGUR_EMAIL,
    //   process.env.IMGUR_PASSWORD,
    //   process.env.IMGUR_CLIENT_ID
    // )

    // // CONVERT TO GRAYSCALE //

    // const image = req.body.file
    // const id = 'lJXK64e'
    // let link = ''

    // // UPLOAD TO IMGUR -> GET PHOTO ID
    // await imgur
    //   .uploadBase64(image, id)
    //   .then(function(json) {
    //     link = json.data.link
    //   })
    //   .catch(function(err) {
    //     console.error(err.message)
    //   })

    // // FACE API CALCULATIONS
    // console.log('HERE')
    // console.log('faceapi:', faceapi.loadFaceRecognitionModel)
    // await faceapi.loadFaceRecognitionModel('/home/ann/Documents/04_BAM/build-a-mate/public/models')
    // console.log('HERE2')
    // //const img = await faceapi.fetchImage(link)
    // const createdFace = await faceapi.computeFaceDescriptor(image)
    // console.log('desc:', createdFace)

    // SAVE FACE DESCRIPTOR TO USER INSTANCE
    const user = await User.findByPk(req.params.id)
    console.log(user)
    console.log(req.body.faceDesc)
    const createdFaceDesc = JSON.stringify(req.body.faceDesc)
    await user.update({createdFaceDesc})
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
