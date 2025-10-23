const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Hola desde mi examen' });
});

function sumar(a, b) {
  return a + b;
}

app.get('/sum', (req, res) => {
  const a = Number(req.query.a || 0);
  const b = Number(req.query.b || 0);
  res.json({ result: sumar(a, b) });
});

if (require.main === module) {
  const port = process.env.PORT || 3005;
  app.listen(port, () => console.log(`App corriendo en puerto ${port}`));
}

module.exports = { app, sumar };
