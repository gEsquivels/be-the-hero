const generateUniqueId = require('../utils/generateUniqueId');
const dbConnection = require('../database/connection');

module.exports = {
   async list(req, res) {
      const ongs = await dbConnection('ongs').select('*');

      return res.json(ongs);
   },

   async create(req, res) {
      const { name, email, whatsapp, city, uf } = req.body;

      const id = await generateUniqueId();

      await dbConnection('ongs').insert({
         id,
         name,
         email,
         whatsapp,
         city,
         uf
      });

      return res.json({ id });
   }
}
