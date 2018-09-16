const r = require('rethinkdb');


async function run() {
  const conn = await r.connect({ host: 'gcp-rtk', port: 28115, db: 'linebot' });

  //const cur = await r.db('linebot').table('ubike').filter(row => row.hasFields('location').not()).run(conn);
  const cur = await r.db('linebot').table('ubike').run(conn);
  const docs = await cur.toArray();

  const results = docs.map(doc => ({...doc, latitude: Number(doc.latitude), longitude: Number(doc.longitude)}))
  await r.table('ubike').insert(results, {conflict: 'update'}).run(conn)

  await conn.close()
}


run()
