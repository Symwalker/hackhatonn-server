// const productModel = require("../Models/productSchema");
const ReqModel = require("../Models/reqSchema");
const emergency = {
    requstss : (req, res) => {

        console.log(req);
        ReqModel.create(req.body, (err, data) => {
            if (err) {
                res.send({
                    msg: "error",
                    err
                })
                // console.log(err);
            } else {
                res.json({
                    msg: 'req build',
                    data
                })
            }
        })
    },
    // getCart: (req, res) => {
    //     productModel.find({}, (err, data) => {
    //         if (err) {
    //             res.send(err)

    //         } else {
    //             res.json({
    //                 data,
    //                 msg : "get Data"
    //             })
    //         }

    //     })
    // }
}

module.exports = emergency