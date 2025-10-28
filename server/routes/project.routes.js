import express from 'express'
import projectCtrl from '../controllers/project.controller.js'

const router = express.Router()

router.route('/api/projects')
  .get(projectCtrl.getAll)
  .post(projectCtrl.add)
  .delete(projectCtrl.deleteAll)

router.route('/api/projects/:id')
  .get(projectCtrl.getById)
  .put(projectCtrl.update)
  .delete(projectCtrl.deleteById)

export default router