const multer = require('multer');
const storage=require('./storage');

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg') {
        return cb(new Error('Solo se permiten archivos PNG y JPEG y JPG.'));
      }
      cb(null, true);
    }
  });

  module.exports=upload;
