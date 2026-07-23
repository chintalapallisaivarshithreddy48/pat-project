import express from 'express'
import { createExperience, deleteExperience, getExperiences, updateExperience } from '../controllers/experienceController.js'

const router = express.Router()

router.get('/', getExperiences)
router.post('/', createExperience)
router.put('/:id', updateExperience)
router.delete('/:id', deleteExperience)

export default router
