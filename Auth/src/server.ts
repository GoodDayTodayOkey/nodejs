import * as express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res,next)=> {
  res.send('hello Auth')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});