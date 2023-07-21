import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = 5100;

app.listen(port, () => console.log(`PORT: ${port}`));
