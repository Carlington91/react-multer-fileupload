const Gallery = require('../model/galleryModel')
const formidable = require('formidable')
const fs = require('fs')

exports.create = async (req, res) => {
  try {
    const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields, files) => {
      if (err) console.log(err)
      if (files.image) {
        const imagePath = files.image.path
        const newImagePath = `uploads/${files.image.name}`
        const imageData = fs.readFileSync(imagePath)
        fs.writeFile(newImagePath, imageData, (err) => {
          if (err) console.log(err)
        })
      }

      await Gallery.create({
        image: files.image.name
      })

      res.status(201).json({ msg: 'File uploaded successfully' })

    })
  } catch (e) {
    console.log('Error: ', e)
  }
}

exports.readAll = async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({ creadtedAt: -1 })
    res.status(200).json(gallery)
  } catch (error) {
    console.log(error)
  }
}

