const { router } = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//imported routes
const Books = require('../mongoose_model/Books')
const uploads = require('../middleware/image-upload')

router.post('/upload',uploads.single() ,async (req,res)=>{
    const { title, book_cover_image, genre, summary, writers } = req.body
   const book = new books({
      title,
      book_cover_image: req.file.book_image,
      genre,
      summary,
      writers
   })
   try {
       const newBook = await book.save();
       console.log(newBook);
       
   } catch (error) {
       res.send(error)
   }
})


module.exports= router

