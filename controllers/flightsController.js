const db = require("../models");

module.exports ={

    addFlights: function(req,res){
            db.Flight.create(req.body).then(function(flight) {
            res.json(flight);
        });
    
},
    findFlights: function(req,res){
        var id = req.params.id;
        db.User.findAll({
            where: { id: id },
            include: [db.Flight]
        }).then(function(response) {
            res.json(response);
        });
    
}
    // app.put("/api/update", function(req, res) {  
    //     db.Flight
    // });
}