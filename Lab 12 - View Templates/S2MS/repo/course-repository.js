import fetch from 'node-fetch';

export default class CourseRepository{
    constructor() {
    }
    async getPrograms(){
        const data = await fetch('https://cmps356s17.github.io/data/ceng-programs.json');
        const programs = await data.json();
        return programs;
    }
    async getCourses(programCode){
        let data = await fetch('https://cmps356s17.github.io/data/ceng-courses.json');
        let courses = await data.json();
        return courses.filter(c=>c.program === programCode.toUpperCase());
    }
}

new CourseRepository().getCourses("AUP").then(courses => console.log(courses))

