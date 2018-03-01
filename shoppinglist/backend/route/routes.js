const express = require(`express`);
const router = express.Router();

//uvozenje kontakt sheme da bi mogli dodavati, menjanati, brisati kontakt
const Item = require(`../model/shoppingItem`);

//preuzimanje podataka iz baze podataka
router.get(`/items`, (req, res, next) => {
    Item.find(function (err, items) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(items);
        }
    });
});

//dodavanje kontakta
router.post(`/item`, (req, res, next) => {
    let newShoppingItem = new Item({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought
    });
    newShoppingItem.save((err, item) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ msg: `Artikl je uspesno dodat` });
        }
    });
});

//izmena kontakta uz pomoc id
router.put(`/item/:id`, (req, res, next) => {
    Item.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemBought: req.body.itemBought
        }
    },
        function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);


            }

        })
});
//brisanje kontakata uz pomoc id
router.delete(`/item/:id`, (req, res, next) => {
    Item.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});


module.exports = router;
