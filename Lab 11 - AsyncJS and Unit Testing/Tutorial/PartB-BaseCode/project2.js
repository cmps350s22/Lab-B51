/*
1)	We need to read data from two files. course.json and staff.json. Both using callbacks.
2)	We need finally print all courses with their corresponding instructor names.
a)	Instructor name can be found at the staff file.
b)	Use staffNo in staff.json property to match the instructorId from course.json
3)	Create two functions getCourses and setInstructorNames.
function getCourses(cb)
	function setInstrctorNames(courses , cb)
4)	Instructor names are set as a new property to the course object in the setInstrctorNames function.

 */
import fs from 'fs';

function getCourses(cb) {
    fs.readFile('data/course.json', (err, data) => {
        if (!err) {
            const courses = JSON.parse(data)
            fs.readFile('data/staff.json', (err, data) => {
                if (!err) {
                    const staffs = JSON.parse(data)
                    fs.readFile('data/student.json', (err, data) => {
                        if (!err) {
                            const students = JSON.parse(data)
                            for (const course of courses) {
                                const {
                                    firstname: firstname,
                                    lastname
                                } = staffs.find(staff => staff.staffNo == course.instructorId)
                                course.instructor = `${firstname} ${lastname}`
                                course.students = []
                                for (const student of students) {
                                    if (student.courseIds.includes(course.crn))
                                        course.students.push(student.firstname)
                                }
                                // delete course.instructorId
                            }
                            cb(null, courses)
                        } else {
                            cb(err, null)
                        }
                    })
                } else {
                    cb(err, null)
                }
            })
        } else
            cb(err, null)
    })
}


getCourses((err, courses) => {
    if (!err)
        console.log(courses)
    else
        console.log(err)
})
