const express = require("express");
const router = express.Router();
const { s3 } = require("../middleware/upload");

// :filename is the key for s3
router.get("/image/:filename", (req, res) => {
  s3.getObject({ Bucket: process.env.S3_BUCKET, Key: req.params.filename })
    .createReadStream()
    .pipe(res);
});

module.exports = router;
