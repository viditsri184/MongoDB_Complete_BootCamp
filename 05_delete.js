db.inventory.deleteMany({}); //-->deletes all documents from the inventory collection

db.inventory.deleteMany({ status : "A" });


db.inventory.deleteOne( { status: "D" } );