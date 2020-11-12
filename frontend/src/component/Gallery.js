import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Gallery = () => {
  const [result, setResult] = useState([])


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await axios.get('/api/v1/gallery')
    setResult(res.data)
  }

  const showResult = () => (
    result && result.map((data, i) => (
      <img key={i} src={data.image} className='grid-item' />
    ))
  )

  return (
    <div className='grid-container'>
      {showResult()}
    </div>
  )
}

export default Gallery
