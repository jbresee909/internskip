const S3 = require("aws-sdk/clients/s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const crypto = require("crypto");
const path = require("path");

const s3 = new S3({
  signatureVersion: "v4",
  apiVersion: "v4",
  computeChecksums: true,
  sslEnabled: true,
  s3UseArnRegion: true,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  fileSize: 10 ** 9,
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    serverSideEncryption: "AES256",
    key: function (req, file, cb) {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return cb(err);
        }
        const extension = path.extname("" + file.filename);
        cb(null, `${buf.toString("hex")}${extension}`);
      });
    },
  }),
});

module.exports = {
  upload,
  s3,
};
