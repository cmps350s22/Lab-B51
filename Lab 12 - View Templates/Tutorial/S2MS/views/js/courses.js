const template = `
    <table class="table">
        <thead>
            <tr>
                <th>Program</th>
                <th>Code</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {{#each courses as |c|}}
                <tr>
                    <td>{{c.program}}</td>
                    <td>{{c.code}}</td>
                    <td>{{c.name}}</td>
                </tr>
            {{/each}}
        </tbody>
    </table>
`
async function getCourses(programCode){
    const data =  await  fetch(`/api/courses/${programCode}`)
    const courses = await data.json()
    const compiledTemplate = Handlebars.compile(template)
    const htmlCode = compiledTemplate({courses})

    document.querySelector('#courses-area')
        .innerHTML = htmlCode
}
