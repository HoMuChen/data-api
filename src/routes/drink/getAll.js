const { getAll } = require('../../store');

module.exports = (req, res) => {
  getAll({ table: 'drink', db: 'linebot' })
    .then(docs => res.json(docs))
    .catch(e => {
      console.log(`[Error] at drink/getAll, message: ${e.message}`);
      res.status(500).send('Something went wrong!');
    })
}
