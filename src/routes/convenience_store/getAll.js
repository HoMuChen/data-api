const { getAll } = require('../../store');

module.exports = (req, res) => {
  getAll({ table: 'convenience_store', db: 'linebot' })
    .then(docs => res.json(docs))
    .catch(e => {
      console.log(`[Error] at convenience_store/getAll, message: ${e.message}`);
      res.status(500).send('Something went wrong!');
    })
}
