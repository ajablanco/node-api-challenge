const express = require('express');

const Projects = require("../helpers/projectModel");
const router = express.Router();

router.post("/", (req, res) => {
    const projectInfo = req.body;
    Projects.insert(projectInfo)
    .then((project) => {
        res.status(201).json({success: true, project})
    })
    .catch((err) => {
        res.status(500).json({message: "error"})
    });
});

router.get("/", (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({message: "error 505"})
    });
});

router.put("/:id", (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({message: "error"}))
});

router.delete("/:id", (req, res) => {
    Projects.remove(req.params.id)
    .then(project => {
        res.status(200).json({message: "project deleted successfully"});
    })
    .catch(err => {
        res.status(500).json({message: "server error"})
    });
});

module.exports = router;