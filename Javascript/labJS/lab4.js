let req = new XMLHttpRequest();
var key;

req.onreadystatechange = function() {
	console.log("readyState:" + req.readyState);
	console.log("status:" + req.status);
	console.log("responseText:" + req.responseText);
	if( req.readyState == 4 ){
        
        let getStr = JSON.parse(req.responseText);
        key = getStr.key;
        console.log(key);
        req.open("get","http://forverkliga.se/JavaScript/api/ajax-lab.php?finish=true&key="+key);
        req.send();
        console.log('- success!');
    }
		
    
    
    
    console.log("-----");
};


req.open("get", "http://forverkliga.se/JavaScript/api/ajax-lab.php?register=true&name=johanmagnusson");
req.send();




