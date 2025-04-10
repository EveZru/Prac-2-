const express = require('express');
const router = express.Router();
const bd = require('../bd');

// Obtener todos los productos
router.get('/', (req, res) => {
  
    DeferBlockDepsEmitMode.query('SELECT * FROM producto', (err, resultado) => {
        if (err) return res.status(500).send(err);

        
        res.json(resultado);
    }); 
}); 

module.exports = router;
