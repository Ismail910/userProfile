


// const {validationResult} = require("express-validator")

const businessModel = require("../../models/Business");
class businessMedia {
    async  create (req ,res) {
       try {
        
        const obj = {
            name: req.body.name,
            description: req.body.description,
            photo: req.file.filename,
            video:req.body.video,
            link:req.body.link,
          };

        await businessModel.create(obj)
        return res.status(201).send('your business has created successfully!')
       } catch (error) {
        return res.status(401).send(error);
       }    
    }


    async get(req, res){
        const userID = req.params.user;
       try {
        const response = await businessModel.find({user:userID});
        return res.status(200).json(response)
       } catch (error) {
        return res.status(500).send(error);
       }
    }

    // async update(req, res){
    //     try {
    //         const id = req.params.id;
    //         const business  = await businessModel.updateOne({_id:id},{$set:req.body});
    //         return res.json(business);
    //     } catch (error) {
    //         return res.status(500).send(error);
    //     }
    // }
    async update(req, res) {
        try {
          // Check if file was uploaded successfully
          if (!req.file || res.statusCode === 404) {
            return res.status(400).json({ error: "Invalid file upload" });
          }
      
          const objuser = {
            name: req.body.name,
            description: req.body.description,
            photo: req.file.filename,
            video:req.body.video,
            link:req.body.link,
          };
      
        
          const imagePath = path.join(
            __dirname,
            "../../assets/uploads/businessfile",
            objuser.photo
          );
      
          // Check if file deletion was successful
          try {
            if (fs.existsSync(imagePath)) {
              fs.unlinkSync(imagePath);
            }
          } catch (error) {
            return res.status(500).json({ error: "Error deleting file" });
          }
      
          const id = req.params.id;
      
          // Check if ID is valid
          if (!id) {
            return res.status(400).json({ error: "Invalid ID" });
          }
      
          const business = await adminModel.updateOne({ _id: id }, { $set: objuser });
          return res.json(business);
        } catch (error) {
          return res.status(500).json({ error: "Error updating user profile" });
        }
      }
      

    async delete(req , res){
        try{
            const business= await businessModel.deleteOne({_id:req.params.id});
             return res.json(business);
          }
          catch(err){
             res.status(500).send(err);
          }
    }
}

module.exports = new businessMedia; 



//     async (req, res) => {
//       const id = req.params.id;
//       if (!req.body.name || !req.body.Date) {
//         return res
//           .status(400)
//           .json({ message: "Name and Date are required fields" });
//       }
  
//       const date = new Date(req.body.Date);
//       if (isNaN(date.getTime()) || date.getTime() < Date.now()) {
//         return res
//           .status(400)
//           .json({ message: "Invalid date format or date is in the past" });
//       }
//       const objCourse = {
//         name: req.body.name,
//         description: req.body.description,
//         Date: req.body.Date,
//       };
//       if (req.file && res.statusCode != 404) {
//         const imagePath = path.join(
//           __dirname,
//           "../../assets/uploads/userProfil",
//           objCourse.image
//         );
//         fs.unlinkSync(imagePath);
//         obj.photo = req.file.filename;
//       }
//       try {
//         const course = await courseModel.updateOne(
//           { _id: id },
//           { $set: objCourse }
//         );
//         if (!course) {
//           return res.status(404).send("Course not found");
//         }
//         return res.json(course);
//       } catch (err) {
//         res.status(500).send(err);
//       }
//     }
//   );