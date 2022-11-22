const express = require('express')
require('../dbconfig/dbConnect')
const artistModel = require('../Model/Model')
const userModel = require('../Model/userModel')
const CardModel = require("../model/CardModel");
const cors = require('cors')
//cors is used to connect frontend and backend simaltenously

const ex = express();

ex.use(express.json());
ex.use(cors())



const mongoose = require("mongoose")







ex.post('/artistRegister', async (req, resp) => {
    const artist = new artistModel(req.body);
    const result = await artist.save()
    resp.send(result)
})

ex.post('/userRegister', async (req, resp) => {
    const user = new userModel(req.body);
    const result = await user.save()
    resp.send(result)
})



ex.get("/artistLogin", (req, res) => {
    artistModel.find((err, foundArtist) => {
        if (!err) {
            res.send(foundArtist)
        } else {
            res.send(err);
        }
    })
})




ex.get("/userLogin", (req, res) => {
    userModel.find((err, foundUser) => {
        if (!err) {
            res.send(foundUser)
        } else {
            res.send(err);
        }
    })
})

    


    //add post
    ex.post("/createNewPost", async (req, res) => {
        const product = new CardModel(req.body);
        const result = await product.save();
        res.send(result);
    });


//show post

ex.get("/showNewPost", async (req, resp) => {
    const result = await CardModel.find().sort({ _id: -1 })
    //console.log(result); to get the result in terminal ie he console
    resp.send(result)
    // to get the result in browser ie  http://localhost:4000/getProduc
})


ex.listen(4000)