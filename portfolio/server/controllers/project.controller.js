import Project from '../models/project.model.js'

const addProject = async (req, res) => {
  try {
    const project = new Project(req.body)
    await project.save()
    res.status(201).json(project)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    res.json(project)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    res.json(project)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteProjectById = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    res.json({ message: 'Project deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteProjectAll = async (req, res) => {
  try {
    await Project.deleteMany({})
    res.json({ message: 'All projects deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export default {
  add: addProject,
  getAll: getAllProjects,
  getById: getProjectById,
  update: updateProject,
  deleteById: deleteProjectById,
  deleteAll: deleteProjectAll
}