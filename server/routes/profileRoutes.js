import express from 'express'
import { createProfile, getProfile, updateProfile } from '../controllers/profileController.js'

const router = express.Router()

router.get('/', getProfile)
router.post('/', createProfile)
router.put('/:id', updateProfile)

export default router
