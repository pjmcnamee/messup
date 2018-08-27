'use strict';

var leftEl = document.getElementById('left');
var centerEl = document.getElementById('center');
var rightEl = document.getElementById('right');

var allPictures = [];

function Pictures(name) {
  this.name = name;
  this.path = `img/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  allPictures.push(this);
}

var allPictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

allPictureNames.forEach(function (pictureNames) {
  new Pictures(pictureNames);
});

var randomPicture = [];
var clickCount = -1;

function getNewPictures(oldPictures) {
  var newPictures = [];
  for (var i = 0; i < 3; i++) {
    do {
      var randomPictureNumber = Math.floor(allPictures.length * Math.random());
    } while (oldPictures.includes(randomPictureNumber) || newPictures.includes(randomPictureNumber)) ;
    newPictures.push(randomPictureNumber);
  }
  return newPictures;
}


function showPictures() {
  randomPicture = getNewPictures(randomPicture);

  allPictures[randomPicture[0]].views++;
  leftEl.src = allPictures[randomPicture[0]].path;
  leftEl.title = allPictures[randomPicture[0]].name;
  leftEl.alt = allPictures[randomPicture[0]].name;


  allPictures[randomPicture[1]].views++;
  centerEl.src = allPictures[randomPicture[1]].path;
  centerEl.title = allPictures[randomPicture[1]].name;
  centerEl.alt = allPictures[randomPicture[1]].name;

  allPictures[randomPicture[2]].views++;
  rightEl.src = allPictures[randomPicture[2]].path;
  rightEl.title = allPictures[randomPicture[2]].name;
  rightEl.alt = allPictures[randomPicture[2]].name;

}

showPictures();

function clickChecker(picTitle) {
  if (clickCount < 25) {
    allPictures[allPictureNames.indexOf(picTitle)].votes++;
    showPictures();
    clickCount++;
  } else {
    ygb();

  }
}

function ygb() {
  leftEl.src = '';
  leftEl.title = '';
  leftEl.alt = 'Y';
  centerEl.src = '';
  centerEl.title = '';
  centerEl.alt = 'G';
  rightEl.src = '';
  rightEl.title = '';
  rightEl.alt = 'B';
}

leftEl.addEventListener('click', function () { clickChecker(leftEl.title); });
centerEl.addEventListener('click', function () { clickChecker(centerEl.title); });
rightEl.addEventListener('click', function () { clickChecker(rightEl.title); });



