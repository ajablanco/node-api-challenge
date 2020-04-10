const express = require('express');

const Actions = require("../helpers/actionModel");

const router = express.Router();

router.post('/', (req, res) => {
    const actionInfo = req.body;
    Actions.insert(actionInfo)
    .then((action) => {
        res.status(201).json({success: true, action})
    })
    .catch((err) => {
        res.status(500).json({message: "error"})
    });
});

router.get('/', (req, res) => {
    Actions.get()
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        res.status(500).json({message: "error could not be retrieved"})
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Actions.get(id)
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        res.status(500).json({message: "error could not be retrieved"})
    });
});


router.put("/:id", (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(action=> res.status(200).json(action))
    .catch(err => res.status(500).json({message: "error"}))
});

router.delete("/:id", (req, res) => {
    Actions.remove(req.params.id)
    .then(action => {
        res.status(200).json({message: "successfully deleted"});
    })
    .catch(err => {
        res.status(500).json({message: "server error"})
    });
});

module.exports = router;