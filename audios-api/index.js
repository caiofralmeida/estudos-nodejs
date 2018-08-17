const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

router.use(bodyParser.json());

router.post('/v1/audios', (req, resp) => {
  console.log(req.body);
  resp.end();
});

router.get('/v1/audios', (req, resp) => {
  console.log('test..,.');
  resp.write('jamal');
  resp.end();
});

app.use(router);

app.listen(5001, () => {
  console.log(process.pid);
});
