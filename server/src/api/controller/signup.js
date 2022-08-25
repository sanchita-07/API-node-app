const Userdb = require('../model/signup');

exports.register = (req,res) => {

const {name, email, password} = req.body;

if(!req.body){
   return res.status(400).send({message: "Field Required!"});
}

Userdb.findOne({email}, (err,user) =>{
    if(user){
        res.send({message: "User already registered!"})
    }
    else{
        const user = new Userdb({name,email,password})

        user.save(user)
        .then(data =>{
            res.json({message : "Registered Successfully!"});
        })
        
        .catch(err =>{
            res.status(400).send({message: err.message});
        })
    }
})

}


exports.login = (req,res) => {

    const {email, password} = req.body;
    
    if(!req.body){
       return res.status(400).send({message: "Field Required!"});
    }
    
    Userdb.findOne({email}, (err,user) =>{
        if(user){
            if(password === user.password) {
                res.send({message: "Login Successful"}, user)
            }
            else {
                res.send({message: "Incorrect Password"})
            }
        }
        else{
            res.send({message: "User not registered!"})
        }
    })
    }