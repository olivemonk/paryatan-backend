const jwt = require("jsonwebtoken");


const auth = (req,res,next) => {
    try {
        let token = req.headers.authorization.split(" ")[1];
        if(token){
            let user = jwt.verify(token, process.env.JWT_SECRET);
            // req.userId = user.id;
            // console.log(user);
            req.name = user.name;
        }else{
            res.status(401).json({message: "Unauthorized User"})
        }
        next(); 
    } catch (error) {
        res.status(401).json({message: "Unauthorized User"})
        throw new Error(error)
    }
}


module.exports = auth;