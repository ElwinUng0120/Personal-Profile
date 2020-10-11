// import fs
const fs = require("fs");
// import moment.js
const moment = require("moment");

// thumbnails folder path
const thumbnailsFolder = "../img/portfolio_thumbnails"
// list of img
const imgList = fs.readdirSync(thumbnailsFolder);


function sortImgList(imgList) {
    return imgList.sort((file1, file2) => {
        let fileDate1 = moment(fs.statSync(thumbnailsFolder + `/${file1}`).mtime);
        let fileDate2 = moment(fs.statSync(thumbnailsFolder + `/${file2}`).mtime);
        if (moment(fileDate1).isAfter(fileDate2)) return -1;
        else if (moment(fileDate1).isBefore(fileDate2)) return 1;
        else return 0;
    });
}

function buildColumns(){
    let sortedImgList = sortImgList(imgList);
    const html = [];
    for(let i=0; i<3; i++){
        html.push(`
            <img class="hoverZoom" src="./img/portfolio_thumbnails/${sortedImgList[i]}" alt="${sortedImgList[i]}" />
            <br><br>
        `)
    }
    html.push("</div>")
    html.push(`<div class="col-lg-6 col-md-12 col-sm-12">`);
    for(let i=3; i<6; i++){
        html.push(`
            <img class="hoverZoom" src="./img/portfolio_thumbnails/${sortedImgList[i]}" alt="${sortedImgList[i]}" />
            <br><br>
        `)
    }
    insertCards(html)
}

const insertCards = (html) =>{
    const pattern = new RegExp("{{ placeholder }}", "gm");
    let target = fs.readFileSync("../templates/portfolioTemplate.html", "utf8");
    fs.writeFileSync("../test.html", target.replace(pattern, html.join("")));
}

buildColumns();


