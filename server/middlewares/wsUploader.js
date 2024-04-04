const {CONSTANTS: {IMAGE_STATIC_PATH}} = require('../constants');

module.exports.uploader = async (image) => {
    const pureDataImage = image.replace(/^data:image\/\w+;base64,/, '');
        const fileName = `${Date.now()}.userImage.jpg`;
       await fs.writeFile(`${IMAGE_STATIC_PATH}/${fileName}`, pureDataImage, {encoding: 'base64'});
       return fileName;
}