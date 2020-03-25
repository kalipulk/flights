const db = require("../models");

module.exports ={

    addFlight: function(req,res){
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
    
},
deleteFlights: function(req,res){
    var id = req.params.id;
    db.Flight.destroy({
        where: { id: id },
    }).then(function(response) {
        res.json(response);
    });

},
updateFlight: function(req,res){
   const id =req.body.id
   console.log(req.body);
    db.Flight.update({
        price:req.body.price
    },
    {
        where:{id: id}
    }).then(function(response){
        console.log("price changed")
        res.json(response);
    });
}
}