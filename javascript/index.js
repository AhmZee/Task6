


window.onload = function () {

  textMessageChange();
  

  let getImgWindow = document.querySelector('.bg-img');
  let getTracker1 = document.querySelector('.tracker_1');
  let getTracker2 = document.querySelector('.tracker_2');
  let getTracker3 = document.querySelector('.tracker_3');


  let getText1 = document.querySelector('.text1');
  let getText2 = document.querySelector('.text2');
  let getText3 = document.querySelector('.text3');


  getText2.style.display = 'none';
  getText3.style.display = 'none';
  getTracker1.style.backgroundColor = '#272727';
  let currentImg = 1;
  



  setInterval(imgTransform, 3000);

  function imgTransform() {
    if (currentImg === 1) {
      getImgWindow.setAttribute('src', './images/bg1.jpg');
      getTracker1.style.backgroundColor = '#272727';
      getTracker2.style.backgroundColor = '#686868';
      getTracker3.style.backgroundColor = '#686868';

      getText1.style.display = 'block';
      getText2.style.display = 'none';
      getText3.style.display = 'none';
    } else if (currentImg === 2) {
      getImgWindow.setAttribute('src', './images/bg2.jpg');
      getTracker2.style.backgroundColor = '#272727';
      getTracker1.style.backgroundColor = '#686868';
      getTracker3.style.backgroundColor = '#686868';

      getText2.style.display = 'block';
      getText1.style.display = 'none';
      getText3.style.display = 'none';
    } else if (currentImg === 3) {
      getImgWindow.setAttribute('src', './images/bg3.jpg');
      getTracker3.style.backgroundColor = '#272727';
      getTracker1.style.backgroundColor = '#686868';
      getTracker2.style.backgroundColor = '#686868';

      getText3.style.display = 'block';
      getText2.style.display = 'none';
      getText1.style.display = 'none';
    }

    currentImg++;

    if (currentImg > 3) {
      currentImg = 1;
    } else if (currentImg < 1) {
      currentImg = 3;
    }
  }


  getTracker1.onclick = function () {
    getImgWindow.setAttribute('src', './images/bg1.jpg');
    getTracker1.style.backgroundColor = '#272727';
    getTracker2.style.backgroundColor = '#686868';
    getTracker3.style.backgroundColor = '#686868';

    getText1.style.display = 'block';
    getText2.style.display = 'none';
    getText3.style.display = 'none';
  }
  getTracker2.onclick = function () {
    getImgWindow.setAttribute('src', './images/bg2.jpg');
    getTracker2.style.backgroundColor = '#272727';
    getTracker1.style.backgroundColor = '#686868';
    getTracker3.style.backgroundColor = '#686868';

    getText2.style.display = 'block';
    getText1.style.display = 'none';
    getText3.style.display = 'none';
  }
  getTracker3.onclick = function () {
    getImgWindow.setAttribute('src', './images/bg3.jpg');
    getTracker3.style.backgroundColor = '#272727';
    getTracker1.style.backgroundColor = '#686868';
    getTracker2.style.backgroundColor = '#686868';

    getText3.style.display = 'block';
    getText2.style.display = 'none';
    getText1.style.display = 'none';
  }



 

}

function transform() {
  let getb = document.body;
  let getSec = document.querySelector('.section-4');

  let getSec1 = document.querySelector('.section-1');
  let getSec3 = document.querySelector('.section-3');
  let prefooter = document.querySelector('.hr-line');


  if (getb.classList.contains('.dark')) {
    getSec1.style.backgroundColor = '#F5F5F5';
    getSec1.style.color = '#000';


    getSec.style.backgroundColor = '#fff';
    getSec.style.color = '#000';


   getSec3.style.backgroundColor = '#F5F5F5';
   getSec3.style.color = '#000';

   prefooter.style.backgroundColor = '#ffffff';
   prefooter.style.color = '#000';

   getb.style.backgroundColor = '#fff';
   getb.style.color = '#000';


    getb.classList.remove('.dark');
  } else {
    getSec1.style.backgroundColor = '#272727';
     getSec1.style.color = '#fff';

     getb.style.backgroundColor = '#272727';
     getb.style.color = '#fff';

     getSec.style.backgroundColor = '#272727';
     getSec.style.color = '#fff';


    getSec3.style.backgroundColor = '#272727';
    getSec3.style.color = '#fff';

    prefooter.style.backgroundColor = '#272727';
    prefooter.style.color = '#fff';

    getb.classList.add('.dark');
  }

  
}


function textMessageChange() {
  let getTextMessage1 = document.querySelector('.text-message1');
  let getTextMessage2 = document.querySelector('.text-message2');
  let getTextMessage3 = document.querySelector('.text-message3');

  let getMessageTracker1 = document.querySelector('.message-tracker1');
  let getMessageTracker2 = document.querySelector('.message-tracker2');
  let getMessageTracker3 = document.querySelector('.message-tracker3');

  getTextMessage2.style.display = 'none';
  getTextMessage3.style.display = 'none';
  getMessageTracker1.style.backgroundColor = 'white';

  let textChanger = 1;

  setInterval(textMessageChanger, 3000);

  function textMessageChanger() {

    if (textChanger === 1) {
      getMessageTracker1.style.backgroundColor = 'white';
      getMessageTracker2.style.backgroundColor = 'black';
      getMessageTracker3.style.backgroundColor = 'black';

      getTextMessage1.style.display = 'block';
      getTextMessage2.style.display = 'none';
      getTextMessage3.style.display = 'none';
    } else if (textChanger === 2) {
      getMessageTracker1.style.backgroundColor = 'black';
      getMessageTracker2.style.backgroundColor = 'white';
      getMessageTracker3.style.backgroundColor = 'black';

      getTextMessage1.style.display = 'none';
      getTextMessage2.style.display = 'block';
      getTextMessage3.style.display = 'none';
    }else if (textChanger === 3) {
      getMessageTracker1.style.backgroundColor = 'black';
      getMessageTracker2.style.backgroundColor = 'black';
      getMessageTracker3.style.backgroundColor = 'white';

      getTextMessage1.style.display = 'none';
      getTextMessage2.style.display = 'none';
      getTextMessage3.style.display = 'block';
    }

    textChanger++;

    if (textChanger > 3) {
      textChanger = 1;
    } else if (textChanger < 1) {
      textChanger = 3;
    }
  }
}

function dropDown() {
  const dropDownMenu = document.querySelector('.mobile-ul');

  const dropMenuList = dropDownMenu.style.display;

  if(dropMenuList === 'block'){
    dropDownMenu.style.display = 'none';
  }else{
    dropDownMenu.style.display = 'block';
  }
}


