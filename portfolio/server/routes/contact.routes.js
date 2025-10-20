import express from 'express'
import contactCtrl from '../controllers/contact.controller.js'

const router = express.Router()

router.route('/api/contacts')
    .post(contactCtrl.add)
    .get(contactCtrl.getAll)
    .delete(contactCtrl.deleteAll)

router.route('/api/contacts/:id')
    .get(contactCtrl.getById)
    .put(contactCtrl.update)
    .delete(contactCtrl.deleteById)

export default router;