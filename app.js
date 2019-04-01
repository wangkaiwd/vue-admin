const express = require('express');
const app = express();
const PORT = 5000;
app.get('/', (req, res) => {
  res.json({ msg: 'hello express' });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

