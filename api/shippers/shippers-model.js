const db = require("../../data/db-config");

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};

async function get() {
  // const result = await db.raw("select * from shippers;");
  // const result = await db("shippers").slect("phone,", "shippername");
  const result = await db("shippers");
  return result;
}

async function getById(shipperid) {
  // const result = await db.raw("select * from shippers where shipperid = 1;");
  const result = await db("shippers").where("shippperid", shipperid).first();
  return result;
}

async function create(shipper) {
  const [shipperid] = await db("shippers").insert(shipper);
  const result = await getById(shipperid);
  return result;
}

async function update(shipperid, changes) {
  // const result = await db("shippers")
  //   .update(changes)
  //   .where("shipperid", shipperid);
  await db("shippers").update(changes).where("shipperid", shipperid);
  const result = await getById(shipperid);
  return result;
}

async function remove(shipperid) {
  // const result = await db("shippers").del().where("shipperid", shipperid);
  const tobeDeleted = await getById(shipperid);
  await db("shippers").del().where("shipperid", shipperid);
  return tobeDeleted;
}
