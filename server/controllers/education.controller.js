import Education from '../models/education.model.js'

const addEducation = async (req, res) => {
    try {
        const education = new Education(req.body)
        await education.save()
        res.status(201).json(education)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const getAllEducation = async (req, res) => {
    try {
        const educations = await Education.find()
        res.json(educations)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id)
    if (!education) {
      return res.status(404).json({ error: 'Education not found' })
    }
    res.json(education)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true })
    if (!education) {
      return res.status(404).json({ error: 'Education not found' })
    }
    res.json(education)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteEducationById = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id)
    if (!education) {
      return res.status(404).json({ error: 'Education not found' })
    }
    res.json({ message: 'Education deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteAllEducation = async (req, res) => {
  try {
    await Education.deleteMany({})
    res.json({ message: 'All educations deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export default {
  add: addEducation,
  getAll: getAllEducation,
  getById: getEducationById,
  update: updateEducation,
  deleteById: deleteEducationById,
  deleteAll: deleteAllEducation
}