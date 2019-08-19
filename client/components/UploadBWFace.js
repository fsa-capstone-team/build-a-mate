// import React, {Component} from 'react'
// import axios from 'axios'
// import aws from 'aws-sdk'

// class UploadBWFace extends Component {
//   constructor() {
//     super()
//     this.state = {
//       img: null
//     }
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     //const img = e.target.img.files[0].name
//     const file = e.target.img.files[0]

//     //config
//     aws.config.update({
//       region: 'us-east-1',
//       credentials: new aws.SharedIniFileCredentials()
//     })

//     //save img to s3
//     var s3 = new aws.S3()

//     var params = {
//       Bucket: 'build-a-mate-img',
//       Key: file.name,
//       Expires: 60,
//       ContentType: file.type
//     }

//     // POST works differently in s3, use PUT to add object to bucket
//     s3.getSignedUrl('putObject', params, async function(err, signedUrl) {
//       if (err) {
//         console.log(err)
//         return err
//       } else {
//         console.log('SIGNED URL:', signedUrl)

//         await axios
//           .put(signedUrl, file, {headers: {'Content-Type': file.type}})
//           .then(function(result) {
//             console.log('RESULT:', result)
//           })
//           .catch(function(err) {
//             console.log(err)
//           })
//       }
//     })

//     this.setState({img: file.name})
//   }

//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <h1>Upload Face</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input type="file" id="bw-face" name="img" accept="image/png" />
//           <input type="submit" value="Upload Image" name="submit" />
//         </form>
//       </div>
//     )
//   }
// }

// export default UploadBWFace

import React, {Component} from 'react'
import Webcam from 'react-webcam'
// import axios from 'axios'
// import aws from 'aws-sdk'
import S3FileUpload from 'react-s3'
require('../../secrets')

class UploadBWFace extends Component {
  constructor() {
    super()
    this.state = {
      file: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    //const img = e.target.img.files[0].name
    const config = {
      bucketName: process.env.S3_BUCKET,
      dirName: 'black_n_white' /* optional */,
      region: 'us-east-1',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }

    S3FileUpload.uploadFile(this.state.file, config)
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  setRef = webcam => {
    this.webcam = webcam
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot()
    this.setState({file: imageSrc})
  }

  render() {
    console.log(this.state)
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    }
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/png"
          width={350}
          videoConstraints={videoConstraints}
        />
        <h1>Upload Face</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" onClick={this.capture}>
            Capture photo
          </button>
          <input type="submit" value="Upload Image" name="submit" />
        </form>
      </div>
    )
  }
}

export default UploadBWFace
