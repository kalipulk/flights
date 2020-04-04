const sendmail = require('sendmail')();

module.exports ={
    email: function(req,res){
        sendmail({
            from: "flyingTime@testing.com",
            to: req.body.email,
            subject: "Your Flight Info",
            html: "going to"+ req.body.arrivalCity + " " +req.body.arrivalAirport+ " from " + req.body.departureCity
                +" "+ req.body.departureAirport +" departure time "+req.body.departureTime+ " departure day "+req.body.departureDate
                + " ticket price "+ req.body.price,
        }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
        res.json("done");
    
    }
    }
