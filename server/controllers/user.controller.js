const express = require('express')
const { StatusCodes } = require('http-status-codes')
const router = express.Router();
const user = require('../model/user.model')

// router.get('/', (req, res) => {
//     user.find().then(docs => {
//         res.send(docs);
//     }).catch(err => {
//         handleError(res, err);
//     })
// })

function handleError(res, err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
}

router.get('/', async (req, res) => {

    try {
        const docs = await user.find()
        res.send(docs);
    } catch (error) {
        handleError(res, err);
    }

})

router.get('/:id', (req, res) => {
    user.findById(req.params.id, (err, doc) => {
        if (err)
            handleError(res, err);
        else
            res.send(doc)
    })
})
router.post('/', (req, res) => {
    const obj = req.body;
    user.create(obj, (err, doc) => {
        if (err)
            handleError(res, err);
        else
            res.status(StatusCodes.CREATED).send(doc);
    });
});

router.put('/:id', (req, res) => {
    const obj = req.body;
    user.findByIdAndUpdate(req.params.id, { name: obj.name, contact: obj.contact, address: obj.address }, (err, doc) => {
        if (err)
            handleError(res, err);
        else
            res.status(StatusCodes.OK).send(doc);
    })
}).delete('/:id', (req, res) => {
    user.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err)
            handleError(res, err);
        else
            res.send(doc)
    })
})

module.exports = router;

