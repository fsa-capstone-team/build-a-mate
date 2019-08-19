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
import axios from 'axios'
require('../../secrets')

class UploadBWFace extends Component {
  constructor() {
    super()
    this.state = {
      file: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.capture = this.capture.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    await axios.post('api/imgur/uploadbwface', this.state.file)
  }

  setRef = webcam => {
    this.webcam = webcam
  }

  capture() {
    var img = new Image()
    const imageSrc = this.webcam.getScreenshot()
    img.src = imageSrc
    this.setState({file: img})
  }

  render() {
    if (this.state.file) {
      console.log(this.state.file)
    }
    console.log(this.state)
    const videoConstraints = {
      width: 150,
      height: 150,
      facingMode: 'user'
    }
    return (
      <div>
        <Webcam
          audio={false}
          height={600}
          ref={this.setRef}
          screenshotFormat="image/png"
          width={600}
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
