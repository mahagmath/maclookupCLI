alert("Hello, welcome MAC hunter") 
console.log("Hello this is Mahantesh!");

var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname+"/index.html","<h1> HTML is good </h1>", function(error){
	if(error){
	return console.log(error);
	}else{
		return console.log("Good congrats");
	}
});
const ApiClient = require('@codelinefi/maclookup');
let client = new ApiClient('Your API key');

client.get('44:38:39:ff:ef:57', function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

client.getRawData('44:38:39:ff:ef:57', 'xml', function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

client.getVendor('44:38:39:ff:ef:57', function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});