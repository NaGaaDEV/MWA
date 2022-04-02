const mongoClient = require("mongodb").MongoClient;
let _dbconnection;
module.exports.open = function() {
    if(this.get() != undefined)
        return _dbconnection;
    mongoClient.connect(process.env.DB_URL, function(err, client) {
        if(err) {
            console.log("Could not connect to database");
            return;
        }
        _dbconnection = client.db(process.env.DB_NAME)
        console.log("Connection to database successful");
    });
}

module.exports.get = function() {
    return _dbconnection;
}