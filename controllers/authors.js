const authorModel = "../models/author"

const createAuthorController = function(req,res){
    const {name,email,country,bookId} = req.body;

    const author = new authorModel ({name,email,country,bookId})

    author.save().then(result => {
        if(result)
        res.json({message: "Author registered succesfully", data: result})

        else res.json({message:"Failed to register author"})    
    })
}

const listAuthorController = function(req,res){
    authorModel.find()
    .populate("bookId")
    .then(authors => {
        res.json({data: authors})
    }).catch(err=>console.log(err))
}



module.exports = {
  
    createAuthorController,
    listAuthorController
}