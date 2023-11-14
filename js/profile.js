

let myProfileInfo = document.getElementById("myProfileInfo");
let gearIcon = document.getElementById("gearIcon");
let myProfileInfoleftValue='-1';

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
  