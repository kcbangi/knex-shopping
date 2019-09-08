exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table.string("email", 255);
      table.string("password", 255);
      table.timestamps(true, true);
    })
    .createTable("products", table => {
      table.increments();
      table.string("title");
      table.text("description");
      table.integer("inventory");
      table.decimal("price", 8, 2);
      table.timestamps(true, true);
    })
    .createTable("carts", table => {
      table.increments();
      table
        .integer("user_id")
        .references("id")
        .on("users")
        .onDelete("cascade");
      table
        .integer("product_id")
        .references("id")
        .on("products")
        .onDelete("cascade");
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("carts")
    .dropTable("products")
    .dropTable("users");
};
