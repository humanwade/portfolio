import express from 'express'
import educationCtrl from '../controllers/education.controller.js'

const router = express.Router()

router.route('/api/educations')
    .post(educationCtrl.add)
    .get(educationCtrl.getAll)
    .delete(educationCtrl.deleteAll)

router.route('/api/educations/:id')
    .get(educationCtrl.getById)
    .put(educationCtrl.update)
    .delete(educationCtrl.deleteById)

export default router