import express from 'express'
import CourseService from './service/course-service.js'
const courseService = new CourseService()

const router = express.Router()
//Render
router.route('/')
    .get(courseService.renderIndex)
router.route('/courses').get(courseService.renderCourses)
router.route('/students').get(courseService.renderStudents)


//API end points

//Todo : Add the two routes

export default router
