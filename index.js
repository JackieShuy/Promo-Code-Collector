const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

db('website')
    .select()
    .then(data => {
        console.log(data)
    })
