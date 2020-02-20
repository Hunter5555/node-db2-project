exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 'ZA9RU31B9XLA12338', make: 'Lamborghini', model: 'Diablo', mileage: '15000', transmission: 'automatic', titlestatus: 'clean'},
        {vin: 'WP0AC29945S692185', make: 'Porsche', model: '911', mileage: '18684', transmission: 'cvt', titlestatus: 'clean'},
        {vin: 'WBAWC73578E067076', make: 'BMW', model: '3 Series', mileage: '15452', transmission: 'automatic', titlestatus: 'clean'}
      ]);
    });
};
