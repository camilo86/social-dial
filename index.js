const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => res.json({ 'message': 'Social Dial' }));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Social Dial server running in port: ${listener.address().port}`);
});
