var request = require('request');
function trigger_build(project_id, callback) {
    var options = {
        uri : 'https://apibeta.shippable.com/projects/56ef86b7c77dae78a8f945e7/newbuild',
        method : 'POST'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        }
        else {
            res = 'Not Found';
        }
        callback(res);
    });                  
}

trigger_build("56ef86b7c77dae78a8f945e7", function(resp){
    console.log(resp);
});
