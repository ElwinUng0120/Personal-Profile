// function showDetails(){
//     $('#overlay').css('display', 'block'); // Displaying focus
//     $('.details').css('display', 'block');
// }

// function close(){
//     $('#overlay').css('display', 'none');
//     $('.details').css('display', 'none');
// }

const links = [
    'https://github.com/ElwinUng0120/Burger-Logger',
    'https://github.com/ElwinUng0120/Employee-Tracker',
    'https://github.com/ElwinUng0120/Note-Taker',
    'https://github.com/ElwinUng0120/Template-Engine_Employee-Summary',
    'https://github.com/ElwinUng0120/README-Generator',
    'https://github.com/ElwinUng0120/Weather-Dashboard',
    'https://github.com/ElwinUng0120/Day-Planner',
    'https://github.com/ElwinUng0120/Timed-Quiz',
    'https://github.com/ElwinUng0120/Password-Generator',
    'https://github.com/ElwinUng0120/Personal-Website-Prototype'
];

var index = 0;
var sortedImgList;

function indexCheck(){
    if (index == 0){
        $('#previousBtn').prop('disabled', 'true');
        $('#nextBtn').removeAttr('disabled');
    } else if ((index + 6) >= sortedImgList.length){
        $('#previousBtn').removeAttr('disabled');
        $('#nextBtn').prop('disabled', 'true');
    } else {
        $('#previousBtn').removeAttr('disabled');
        $('#nextBtn').removeAttr('disabled');
    }
}

function searchLinks(sortedImgList){
    let tempString = sortedImgList.substring(0, sortedImgList.indexOf('.'));
    if(tempString.includes('_')){
        tempString = tempString.substring(0, tempString.indexOf('_'));
    }
    return links.filter(i => i.toLowerCase().includes(tempString))[0];
}

function buildColumns(){
    let link;
    $('#1stRow, #2ndRow, #3rdRow').empty();
    for(let i=index; i<index+2; i++){
        if(sortedImgList[i] == null) {
            return;
        }
        link = searchLinks(sortedImgList[i]);
        $('#1stRow').append(`
        <a class="col-lg-6 col-md-12 col-sm-12 mr-auto" href="${link}" target="blank">
            <img class="hoverZoom" src="./img/portfolio_thumbnails/${sortedImgList[i]}" alt="${sortedImgList[i]}" />
        </a>
        `);
    }
    for(let i=index+2; i<index+4; i++){
        if(sortedImgList[i] == null) {
            return;
        }
        link = searchLinks(sortedImgList[i]);
        $('#2ndRow').append(`
        <a class="col-lg-6 col-md-12 col-sm-12 mr-auto" href="${link}" target="blank">
            <img class="hoverZoom" src="./img/portfolio_thumbnails/${sortedImgList[i]}" alt="${sortedImgList[i]}" />
        </a>
        `);
    }
    for(let i=index+4; i<index+6; i++){
        if(sortedImgList[i] == null) {
            $('.btn-group').prepend(`
            <p id="placeholderText" class="row d-flex justify-content-center">More Coming on the Way</p>
            `);
            return;
        }
        link = searchLinks(sortedImgList[i]);
        $('#3rdRow').append(`
        <a class="col-lg-6 col-md-12 col-sm-12 mr-auto" href="${link}" target="blank">
            <img class="hoverZoom" src="./img/portfolio_thumbnails/${sortedImgList[i]}" alt="${sortedImgList[i]}" />
        </a>
        `);
    }
}

$(document).ready(function(){
    $.ajax('/api/imageList', {
        type: 'GET'
    }).then(function(response){
        console.log(response);
        sortedImgList = response;
        buildColumns();
        indexCheck();
    }).catch((err) => console.log(err));


    $('#previousBtn').on('click', function(){
        if (index > 0) {
            index = index - 6;
        } else {
            return;
        }
        buildColumns();
        indexCheck();
    });

    $('#nextBtn').on('click', function(){
        if (index < sortedImgList.length) {
            index = index + 6;
        } else {
            return;
        }
        buildColumns();
        indexCheck();
    });
});

