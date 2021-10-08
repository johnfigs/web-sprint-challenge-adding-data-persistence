// build your `Resource` model here
const db = require('./../../data/dbConfig')

function get() {
    return db('resources')
        .select('resource_id', 'resource_name', 'resource_description')
}

async function getById(resource_id) {
    const row = await db('resources')
    .select('resource_id', 'resource_name', 'resource_description')
    .where('resource_id', resource_id)
    .first()
    
    return row
}

const create = (resource) => {
    return db('resources').insert(resource)
        .then(([resource_id]) => getById(resource_id))
}

module.exports = {
    get,
    getById,
    create,
}