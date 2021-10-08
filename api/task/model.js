// build your `Task` model here
const db = require('./../../data/dbConfig')

async function get() {
    const rows = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes',
    't.task_completed', 'p.project_name', 'p.project_description')

    const result = []

    rows.forEach(row => {
        result.push({
            task_id: row.task_id,
            task_description: row.task_description,
            task_notes: row.task_notes,
            task_completed: (row.task_completed == 1),
            project_name: row.project_name,
            project_description: row.project_description
        })
    })

    return result
}

async function getById(task_id) {
    const row = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes',
    't.task_completed', 'p.project_name', 'p.project_description')
    .where('task_id', task_id)
    .first()

    const result = {
        ...row,
        task_completed: (row.task_completed == 1)
    }

    return result
}

const create = (task) => {
    return db('tasks').insert(task)
        .then(([task_id]) => getById(task_id))
}

module.exports = {
    get,
    getById,
    create
}