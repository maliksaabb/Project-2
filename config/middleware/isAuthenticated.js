//this is middleware for restricting the routes a user is not allowed
//to visit if not logged in

module.exports = function (req,res,next) {
    //if user is logged in, continutes with request
    if (req.user) {
        return next();
    } 
    //if not logged in, redirect user back to login page
    return res.redirect("/");
}