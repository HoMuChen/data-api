const { getNear } = require('../../store');

module.exports = (req, res) => {
  const { latitude, longitude, n } = req.query;

  if(!latitude || !longitude || !n) {
    return res.status(400).send('Bad request');
  }

  getNear({ db: 'linebot', table: 'convenience_store', latitude: Number(latitude), longitude: Number(longitude), n: Number(n) })
    .then(docs => res.json(docs))
    .catch(e => {
      console.log(`[Error] at convenience_store/getNear, message: ${e.message}`);
      res.status(500).send('Something went wrong!');
    })
}
