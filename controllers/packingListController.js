const db = require("../models");

module.exports ={

    addList: function(req,res){
            db.PackingList.create(req.body).then(function(flight) {
            res.json(flight);
        });
    
},
findList: function(req,res){
    var id = req.params.id;
    console.log(id);
    db.PackingList.findAll({
        where: { FlightId: id }
    }).then(function(response) {
        res.json(response);
       
    });

},
    deleteList: function(req,res){
        var id = req.params.id;
        db.PackingList.destroy({
            where: { id: id },
        }).then(function(response) {
            res.json(response);
        });
    
}
   
}