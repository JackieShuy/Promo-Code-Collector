
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('website').del()
    .then(function () {
      // Inserts seed entries
      return knex('website').insert([
        { id: 1, name: 'selfridges', website:'http://www.selfridges.com/US/en/'},
        { id: 2, name: 'ssense', website: 'https://www.ssense.com/en-nz'},
        { id: 3, name: 'topshop', website:'https://www.topshop.com/'},
        { id: 4, name: 'beautylish', website: 'https://www.beautylish.com/' },
        { id: 5, name: 'farfetch', website: 'https://www.farfetch.com/nz/' },
        { id: 6, name: 'net-a-porter', website: 'https://www.net-a-porter.com/nz/en/'}
      ]);
    });
};
