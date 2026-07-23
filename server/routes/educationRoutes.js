import express from 'express'
import { createEducation, deleteEducation, getEducation, updateEducation } from '../controllers/educationController.js'

const router = express.Router()

router.get('/', getEducation)
router.post('/', createEducation)
router.put('/:id', updateEducation)
router.delete('/:id', deleteEducation)

export default router
