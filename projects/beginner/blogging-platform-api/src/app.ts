import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello to the blogging-platform-api project'));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));