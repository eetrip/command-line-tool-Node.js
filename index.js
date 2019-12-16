#!/usr/bin/env node
const MongoClient = require('mongodb').MongoClient;
const program = require('commander');

const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("temp");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    db.close();
});


program 
  .version('1.0.0')
  .description('Client Management System')

program
   .command('add <firstname> <lastname> <phone> <email>')
   .alias('a')
   .description('Add a customer')
   .action( (firstname, lastname, phone, email) => {

    var myobj = { firstname, lastname, phone, email };
        dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});


program
    .command('find <firstname>')
    .alias('f')
    .description('find one entry')
    .action((firstname) => {
        var obj = {firstname}
        dbo.collection("customers").findOne(obj, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        });
});

program
    .command('update <firstname>')
    .alias('u')
    .description('update an entry')
    .action((firstname, lastname, phone, email) => {
        var myquery = { firstname };
        var newvalues = { $set: { firstname, lastname, phone, email } };
        dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});

program
    .command('list')
    .alias('l')
    .description('find all the entries')
    .action(() => {
        dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

program
    .command('delete <firstname>')
    .alias('d')
    .description('remove an entry')
    .action((firstname) => {
        var myquery = {firstname} ;
        dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});


program.parse(process.argv);

});