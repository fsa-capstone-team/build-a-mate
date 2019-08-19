import React, {Component} from 'react'
import axios from 'axios'

class UploadBWFace extends Component {
  constructor() {
    super()
    this.state = {
      img: null
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    const file = e.target.img.files[0]
    console.log(file)

    await axios.post('/api/imgur/uploadbwface', file)

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
