module.exports.home = function(req, res){
    return res.end("<h2> express is up for codeial!</h2>");
}

module.exports.about = function(req,res){
    return res.end('<h2 style="color: green"> This is about section!</h2>');
}