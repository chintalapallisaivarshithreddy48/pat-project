import Blog from '../models/Blog.js'
import { sendError, sendSuccess } from '../utils/response.js'
import { validateRequiredString } from '../validators/common.js'

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 })
    sendSuccess(res, blogs)
  } catch (error) {
    sendError(res, error.message)
  }
}

export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true })
    if (!blog) return sendError(res, 'Blog not found', 404)
    sendSuccess(res, blog)
  } catch (error) {
    sendError(res, error.message)
  }
}

export const createBlog = async (req, res) => {
  try {
    validateRequiredString(req.body.title, 'title')
    validateRequiredString(req.body.slug, 'slug')
    validateRequiredString(req.body.excerpt, 'excerpt')
    validateRequiredString(req.body.content, 'content')

    const blog = await Blog.create(req.body)
    sendSuccess(res, blog, 201)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!blog) return sendError(res, 'Blog not found', 404)
    sendSuccess(res, blog)
  } catch (error) {
    sendError(res, error.message, 400)
  }
}

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id)
    if (!blog) return sendError(res, 'Blog not found', 404)
    sendSuccess(res, { deleted: true })
  } catch (error) {
    sendError(res, error.message, 400)
  }
}
