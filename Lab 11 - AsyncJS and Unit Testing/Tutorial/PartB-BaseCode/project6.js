/*
1.In project6.js :  Rewrite the code you created in project4.js using Async/await.
 */


import fs from 'fs-extra'

/*
1.Rewrite the you created in Part-1 using promises.
*/

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


async function getCourses() {
    const courses = await fs.readJson('data/course.json')
    const students = await fs.readJson('data/student.json')
    const staffs = await fs.readJson('data/staff.json')

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
    }
    return courses
}

getCourses().then(courses => console.log(courses))

