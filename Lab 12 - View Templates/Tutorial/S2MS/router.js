import express from 'express'
import CourseService from './service/course-service.js'
const courseService = new CourseService()

const router = express.Router()
//Render

//API end points
router.get('/api/programs',courseService.getPrograms);
router.get('/api/courses/:programCode',courseService.getCourses);

router.get('/', courseService.renderIndex)
router.get('/courses', courseService.renderCourses)
router.get('/students', courseService.renderStudents)
export default router
