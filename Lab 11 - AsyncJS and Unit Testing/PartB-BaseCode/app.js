const studentRepository = require('./StudentRepository');
/* Either this way
studentRepository.getStudentCourses(2015008)
.then (stud => console.log(stud))
.catch(err=> console.log(err));
*/
/* Or like sync code using await from async function */
async function main() {
    try {
        const studentId = 2015009;
        const student = await studentRepository.getStudent(studentId);
        console.log("\nStudent ", student);
    }
    catch (err) {
        console.log(err);
    }
}
main();
