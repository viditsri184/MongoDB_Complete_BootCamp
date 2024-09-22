//Building the Database
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
]);

db.inventory.find().sort({qty: -1});   //Descending order
db.inventory.find().sort({qty: 1});    //Ascending order


db.inventory.find().skip(1);  //Skips the first document
db.inventory.find().skip(2);  //Skips the first 2 document


db.inventory.find().limit(1); //Limits the number of documents in the output
db.inventory.find().limit(1); //Limits the number of documents in the output

//Achieving Pagination using MongoDB find and limit
no = 8
db.blogs.find().skip((pageNo-1)*8).limit(no);
// pageNo = 1 db.blogs.find().skip(0).limit(8);
// pageNo = 2 db.blogs.find().skip(8).limit(8);
