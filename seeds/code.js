
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('code').del()
    .then(function () {
      // Inserts seed entries
      return knex('code').insert([
        { id: 1, website_id: 1, code: 'SELF11' },
        { id: 2, website_id: 2, code: 'SSENSE12' },
        { id: 3, website_id: 3, code: 'TP13' },
        { id: 4, website_id: 4, code: 'LISH14' },
        { id: 5, website_id: 5, code: 'FF15' },
        { id: 6, website_id: 6, code: 'NAP16' },
        { id: 7, website_id: 1, code: 'BEAUTY20' },
        { id: 8, website_id: 1, code: 'BEAUTY10' },
      ]);
    });
};
