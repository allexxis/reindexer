const express = require('express');
const app = express();
const port = 3000;
const createHtml = require('./createHtml');
const { exec } = require('child_process');

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
   res.set('Content-Type', 'text/html');
   res.send(Buffer.from(createHtml()));
});
app.post('/reindex', (req, res) => {
   const password = req.body.password;
   if (process.env.SECRET !== password) {
      return res.send('Constraseña incorrecta');
   }
   exec('bin/magento indexer:reindex', (error, stdout, stderr) => {
      if (error) {
         return res.send(`error: ${error.message}`);
      }
      if (stderr) {
         return res.send(`stderr: ${stderr}`);
      }
      return res.send(`stdout: ${stdout}`);
   });
});
app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
