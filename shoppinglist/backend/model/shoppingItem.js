//povezivanje kontakt sheme sa shemom MongoDB bazom
const mongoose = require(`mongoose`);


const ShoppingItemShema = mongoose.Schema({
    itemName: {
        type: String,
        require: true,
    },
    itemQuantity: {
        type: Number,
        require: true
    },
    itemBought: {
        type: Boolean,
        require: true
    }
});

//eksportovanje ove sheme
const Item = module.exports = mongoose.model(`Item`, ShoppingItemShema);
