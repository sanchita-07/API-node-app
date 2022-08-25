const Blogdb = require('../model/blog');

exports.create = (req,res) => {
    const {title, description, createdAt, updatedAt} = req.body;
    if(!req.body){
        return res.status(400).send({message: "Field Required"});
    }
    
    const blog = new Blogdb({title,description});
    
    blog.save(blog)
    .then(data => {
        res.json({message: "Blog Added Successfully!"});
    })
    .catch((err) =>{
        res.status(400).send({message: "Error occurred while adding blog"});
    })
}


exports.read = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        Blogdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: "Blog not found"});
            }
            else
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: "Error in finding blog"});
        })
    }

    Blogdb.find()
    .then(blog => 
        {res.send(blog)
        })
    .catch(err =>{
        res.status(500).send({
            message: "Error occured while retriving data"
        })
    })
}


    exports.update = (req,res) => {
        if(!req.body){
            return res.status(400).send({message: "Blog to update can not be empty"})
        }
        const id = req.params.id;
        Blogdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: "Error occured while updating blog"});
        })
    }

    exports.delete = (req,res) => {
        const id = req.params.id;
    
        db.findByIdAndDelete(id)
        .then(data =>{
                res.send({
                    message:"Blog was deleted successfully!"
                })
        })
        .catch(err =>{
                res.status(500).send({
                message: `Could not delete Blog with id= ${id}`
        })
    })
}