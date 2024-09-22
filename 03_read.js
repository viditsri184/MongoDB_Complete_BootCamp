db.inventory.find();  //-->Fetch all the document
db.inventory.find({});  //-->Fetch all the document

db.inventory.find({qty:90});

db.inventory.find( { status: { $in: ["A" , "D"] } } );

//AND
db.inventory.find( { "size.h": { $lt: 15 }, "size.uom": "in", status: "D" } );

//OR
db.inventory.find(  {  $or:  [  {  status: "A" }, {  qty: {  $lt : 30  }  }  ] } );


db.inventory.findOne( { status: { $in: ["A" , "D"] } } );