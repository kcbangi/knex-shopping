exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          title: "Brand new updated product!",
          description: "Slight brand new!",
          inventory: 4,
          price: 100.98
        }
      ]);
    });
};
