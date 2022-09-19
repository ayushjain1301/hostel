const fs = require('fs')

exports.getallfilepath = async (req, res)=>{
    try {
        const files = await fs.promises.readdir("./assets/images");
                res.status(200).json(files);
            } catch (err) {
                res.status(500).json(err);
            }
}
