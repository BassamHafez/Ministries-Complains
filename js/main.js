let sideBar = document.getElementById("sideBar");
let barIcon = document.getElementById("barIcon");
let myProfileInfo = document.getElementById("myProfileInfo");
let gearIcon = document.getElementById("gearIcon");

let sideBarOpacityValue = '0';
let myProfileInfoleftValue='-1';


barIcon.addEventListener('click', function() {
    sideBarOpacityValue = getComputedStyle(sideBar).opacity;
    toggleSideBar(sideBarOpacityValue);
});

function toggleSideBar(sideBarOpacityValue) {
    if (sideBarOpacityValue === '0') {
        sideBar.style.cssText = "left: 0; opacity: 1";
    } else {
        sideBar.style.cssText = "left: -150%; opacity: 0";
    }
}


gearIcon.addEventListener('click', function() {
    myProfileInfoleftValue = getComputedStyle(myProfileInfo).left;
    togglemyProfileInfo(myProfileInfoleftValue);
});

function togglemyProfileInfo(myProfileInfoleftValue) {
    if (myProfileInfoleftValue < '0') {
        myProfileInfo.style.cssText = "left: 0;";
    } else {
        if (window.innerWidth <= 330) {
            myProfileInfo.style.cssText = "left: -90%;";
        } else {
            myProfileInfo.style.cssText = "left: -300px;";
        }
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth <= 330) {
      togglemyProfileInfo(myProfileInfoleftValue);
    }
  });