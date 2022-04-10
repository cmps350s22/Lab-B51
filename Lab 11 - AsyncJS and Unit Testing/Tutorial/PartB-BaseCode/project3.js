import fs from 'fs-extra'

/*
1.Rewrite the you created in Part-1 using promises.
*/

fs.readJson('data/course.json')
    .then(courses => {
        return fs.readJson('data/staff.json')
            .then(staffs => {
                return fs.readJson('data/student.json')
                    .then(students => {
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
                        return courses
                    })
            })
    })
    .then(coursesWithInstructorsAndStudents => console.log(coursesWithInstructorsAndStudents))
