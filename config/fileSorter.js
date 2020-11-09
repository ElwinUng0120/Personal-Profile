// import fs
const fs = require('fs');
// import moment.js
const moment = require('moment');
const path = require('path');

function sortImgList() {
    // thumbnails folder path
    const thumbnailsFolder = path.resolve(__dirname, '../public/img/portfolio_thumbnails');
    // list of img
    const imgList = fs.readdirSync(thumbnailsFolder);
    return imgList.sort((file1, file2) => {
        let fileDate1 = moment(fs.statSync(thumbnailsFolder + `/${file1}`).mtime);
        let fileDate2 = moment(fs.statSync(thumbnailsFolder + `/${file2}`).mtime);
        if (moment(fileDate1).isAfter(fileDate2)) {
            return -1;
        } else if (moment(fileDate1).isBefore(fileDate2)) {
            return 1;
        } else {
            return 0;
        }
    });
}


module.exports = { sortImgList };