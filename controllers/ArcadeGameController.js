//const ArcadeGame = require('../models/ArcadeGame');
const mongoose = require('mongoose');

const ArcadeGame = require('../models/ArcadeGame');

exports.index = (req, res) => {
    ArcadeGame.find()
        .then(ArcadeGame => {
            res.render('ArcadeGame/index', {
                ArcadeGame: ArcadeGame,
                title: 'Archive'
            });
        })
        .catch(err => {
            console.error(`ERROR: ${err}`);
        });
};

exports.show = (req, res) => {
    ArcadeGame.findById(req.params.id)
    .then(ArcadeGame => {
        res.render('ArcadeGame/show', {
            ArcadeGame: ArcadeGame,
            title: ArcadeGame.title
        })
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};

exports.new = (req, res) => {
    res.render('ArcadeGame/new', {
        title: 'New ArcadeGame Post'
    });
};

exports.edit = (req, res) => {
    ArcadeGame.findById(req.params.id)
    .then(ArcadeGame => {
        res.render('ArcadeGame/edit', {
            ArcadeGame: ArcadeGame,
            title: ArcadeGame.title
        })
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};

exports.create = (req, res) => {
    ArcadeGame.create({
        title: req.body.ArcadeGame.title,
        content: req.body.ArcadeGame.content,
        status: req.body.ArcadeGame.status
    })
    .then(() => {
        res.redirect('/ArcadeGame');
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};

exports.update = (req, res) => {
    ArcadeGame.updateOne({
        _id: req.body.id
    }, req.body.ArcadeGame, {
        runValidators: true
    })
    .then(() => {
        res.redirect(`/ArcadeGame/${req.body.id}`);
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};

exports.destroy = (req, res) => {
    ArcadeGame.deleteOne({
        _id: req.body.id
    })
    .then(() => {
        res.redirect('/ArcadeGame');
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};

// To fill in later
exports.drafts = (req, res) => {};

exports.published = (req, res) => {};