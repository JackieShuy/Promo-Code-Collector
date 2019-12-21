exports.up = function(knex) {
  return knex.schema.createTable("website", function(table) {
    table.increments("id").primary();
    table.string("name");
    table.string("website")
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("website");
};
