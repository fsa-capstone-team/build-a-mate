import React, {Component} from 'react'
import axios from 'axios'
import aws from 'aws-sdk'

class UploadBWFace extends Component {
  constructor() {
    super()
    this.state = {
      img: null
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    //const img = e.target.img.files[0].name
    const file = e.target.img.files[0]

    //config
    aws.config.update({
      accessKeyId: 'AKIAIC22S25GWGHO52VQ',
      secretAccessKey: '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'
    })

    //save img to s3
    var s3 = new aws.S3()

    var params = {
      Bucket: 'build-a-mate',
      Key: file.name,
      Expires: 60,
      ContentType: file.type
    }

    // POST works differently in s3, use PUT to add object to bucket
    s3.getSignedUrl('putObject', params, async function(err, signedUrl) {
      if (err) {
        console.log(err)
        return err
      } else {
        console.log('SIGNED URL:', signedUrl)

        await axios
          .put(signedUrl, file, {headers: {'Content-Type': file.type}})
          .then(function(result) {
            console.log('RESULT:', result)
          })
          .catch(function(err) {
            console.log(err)
          })
      }
    })

    this.setState({img: file.name})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Upload Face</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="file" id="bw-face" name="img" accept="image/png" />
          <input type="submit" value="Upload Image" name="submit" />
        </form>
      </div>
    )
  }
}

export default UploadBWFace
