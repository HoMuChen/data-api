const { getAll } = require('../../store');

module.exports = (req, res) => {
  getAll({ table: 'ubike', db: 'linebot' })
    .then(docs => res.json(docs))
    .catch(e => {
      console.log(`[Error] at toilet/getAll, message: ${e.message}`);
      res.status(500).send('Something went wrong!');
    })
}
