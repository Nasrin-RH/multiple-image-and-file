let express = require('express'),
    multer = require('multer'),
   // uuidv4 = require('uuidv4'),
    router = express.Router();

const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        // const fileName = file.originalname.toLowerCase().split(' ').join('-');
        //cb(null, uuidv4() + '-' + fileName)
        cb(null, Date.now() + '-' +file.originalname);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
var upload1 = multer({
    storage: storage,
    // fileFilter: (req, file, cb) => {
    //     if (file.mimetype == "pdf" || file.mimetype == "docx" || file.mimetype == "txt") {
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //         return cb(new Error('Only .pdf,.docx,.txt format allowed!'));
    //     }
    // }
});

// User model
//let User = require('./User');

router.post('/upload-images', upload.array('imgCollection', 6), (req, res, next) => {

    var fileinfo = req.files;
  var title = req.body.filename;
  console.log(title);
  res.send(fileinfo);

    // const reqFiles = [];
    // const url = req.protocol + '://' + req.get('host')
    // for (var i = 0; i < req.files.length; i++) {
    //     reqFiles.push(url + '/public/' + req.files[i].filename)
    // }

    // const user = new User({
    //     _id: new mongoose.Types.ObjectId(),
    //     imgCollection: reqFiles
    // });

    // user.save().then(result => {
    //     res.status(201).json({
    //         message: "Done upload!",
    //         userCreated: {
    //             _id: result._id,
    //             imgCollection: result.imgCollection
    //         }
    //     })
    // }).catch(err => {
    //     console.log(err),
    //         res.status(500).json({
    //             error: err
    //         });
    // })
})
router.post('/upload-files', upload1.array('docCollection', 6), (req, res, next) => {
    var fileinfo = req.files;
    var title = req.body.title;
    console.log(title);
    res.send(fileinfo);
  
    
})

router.get("/", (req, res, next) => {
    User.query.then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
});

module.exports = router;