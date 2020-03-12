var workout = require('../models/workoutModel')

var router = require("express").Router()

module.exports = function (app) {
    //mongoDB inserts will probably happen here
    //router.get

    router.put("/api/workouts", ({ body }, res) => {
        workout.create(body)
            .then(dbworkout => {
                res.json(dbworkout);
            })
            .catch(err => {
                res.json(err);
            });
    });


    //router.post

    //router.delete

    //router.range *bonus*


}





// app.post("/submit", ({body}, res) => {
//     db.Book.create(body)
//       .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//       .then(dbLibrary => {
//         res.json(dbLibrary);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });