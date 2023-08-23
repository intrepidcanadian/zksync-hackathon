const knex = require("knex")(require("../knexfile"));

// Get all Merch
const getExclusiveMerch = async (req, res) => {
  try {
    const merchData = await knex("merchTables")
      .select(
        "merchTables.id",
        "merchTables.product",
        "merchTables.productDescription",
        "merchTables.productMaterial",
        "merchTables.productName",
        "merchTables.price",
        "merchTables.image",
      )

    res.status(200).json(merchData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getExclusiveMerch
}