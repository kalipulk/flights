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
    db.Flight.findAll({
        where: { id: id },
        include: [db.PackingList]
    }).then(function(response) {
        res.json(response);
       
    });

},
    deleteList: function(req,res){
       
        var id = req.params.id;
        console.log(id)
        db.PackingList.destroy({
            where: { Flightid: id },
        }).then(function(response) {
            console.log(response);
            res.json(response);
        });
    
},
    deleteItem: function(req,res){
        var id = req.params.id;
        db.PackingList.destroy({
            where: {id: id}
        }).then(function(response){
            console.log("item deleted");
            res.json(response);
        })
    },
    updateList:function (req,res){
        var id = req.body.id
       
        db.PackingList.update({
            items: req.body.item
        },{
            where:{id: id}
        }).then(function(response){
            console.log("item updated");
            res.json(response);
           
        })
    }
   
}