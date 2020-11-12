import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const FileUpload = ({ match }) => {
  const [image, setImage] = useState({
    file: '',
    url: ''
  })
  const { file, url } = image
  const history = useHistory()

  console.log(match)

  const onChange = (e) => {
    setImage({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0])
    })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)
    const res = await axios.post('/api/v1/uploads', formData)
    if (res.data.msg) {
      history.push('/')
    }

  }
  return (
    <Fragment>
      <section>
        <h1>File Upload</h1>
        <form onSubmit={onSubmit}>
          <div className="file-group">

            <label htmlFor="image">
              <input
                type="file"
                name='image'
                onChange={onChange}
              />
              {url && <img src={url} alt="" />}
              {file ? '' : 'Upload File'}

            </label>
          </div>
          {url && <button className='btn btn-primary'>Save Image</button>}
        </form>
      </section>
    </Fragment>
  )
}

export default FileUpload
