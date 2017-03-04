var mongo = require("./mongo");
var mongoConnectURL = "mongodb://pavanshah77:pavanshah77@ds113680.mlab.com:13680/freshpepdb";

exports.fetchProducts = function(req, res){
	  
	console.log("fetching products");
	
	var ProductData = [];
	
	mongo.connect(mongoConnectURL, function(connection){
		console.log("connection received "+connection);
		
		console.log('Connected to mongo at: ' + mongoConnectURL);
		var coll = mongo.collection('ProductsCollection');		//collection data in coll
		
		var json_responses;
		
		coll.find({},{}).toArray(function(err, user){	//retrive data
			
			if (user) 
			{
				ProductData = user;
				json_responses = {"ProductData" : ProductData};
				res.send(json_responses);
			} 
			
			else 
			{
				res.code = "401";
				console.log("Error in advertisement data");
			}
		});
				
	});
	
	
};