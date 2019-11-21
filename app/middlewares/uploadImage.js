const multer = require('multer');
const path = require('path');
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk');

// need to create a aws configuration json fileError
// AWS.config.loadFromPath('./config/awsConfig.json');
AWS.config.update({
    accessKeyId: "your aws key here",
    secretAccessKey: "your access key here",
    region: "us-east-1"
  });


const s3 = new AWS.S3();

// Init Upload setting the configuration of S3 aws
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'ravikeepimage',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null,new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
        }
    })

})
// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, '\images');
//     },
//     filename: (req, file, cb) => {
//       cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
//     }
//   });
//   const upload= multer({ storage: fileStorage }).single('image')


module.exports = upload
