// build your `Project` model here
const db = require('./../../data/dbConfig')

async function get() {
    const rows = await db('projects')
        .select('project_id', 'project_name',
        'project_description', 'project_completed')
    
    const result = []

    rows.forEach(row => {
        result.push({
            project_name: row.project_name,
            project_description: row.project_description,
            project_completed: (row.project_completed == 1)
        })
    })

    return result
}

async function getById(project_id) {
    const row = await db('projects')
        .select('project_id', 'project_name',
        'project_description', 'project_completed')
        .where('project_id', project_id)
        .first()
    
    const result = {
        ...row,
        project_completed: (row.project_completed == 1)
    }

    return result
}

const create = (project) => {
    return db('projects').insert(project)
        .then(([project_id]) => getById(project_id))
}

module.exports = {
    get,
    getById,
    create
}