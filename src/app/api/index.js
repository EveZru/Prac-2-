const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const productoRouter = require('./routes/producto'); // nombre consistente
app.use('/api/producto', productoRouter);

app.listen(3000, () => {
    console.log('API corriendo en http://localhost:3000');
});

