exports.up = function(knex) {
  return knex.schema.createTable("code", function(table) {
    table.increments("id");
    table.integer("website_id").references("website.id");
    table.string("code");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("code");
};
