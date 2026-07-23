import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectDB } from '../config/db.js'
import profileRoutes from '../routes/profileRoutes.js'
import projectRoutes from '../routes/projectRoutes.js'
import experienceRoutes from '../routes/experienceRoutes.js'
import educationRoutes from '../routes/educationRoutes.js'
import skillRoutes from '../routes/skillRoutes.js'
import blogRoutes from '../routes/blogRoutes.js'
import contactRoutes from '../routes/contactRoutes.js'
import mediaRoutes from '../routes/mediaRoutes.js'
import { errorHandler } from '../middlewares/errorHandler.js'
import { notFound } from '../middlewares/notFound.js'

const app = express()
const port = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'API is healthy' })
})

app.use('/api/profile', profileRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/experience', experienceRoutes)
app.use('/api/education', educationRoutes)
app.use('/api/skills', skillRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/media', mediaRoutes)

app.use(notFound)
app.use(errorHandler)

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
})
