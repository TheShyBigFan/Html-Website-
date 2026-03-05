let telaviv = document.getElementById("telaviv");
let mossad = document.getElementById("mossad");
let idf = document.getElementById("idf");
let loans = document.getElementById("loans");

//Popup Handling
let acceptcall = document.getElementById("accept");
let declinecall = document.getElementById("decline");
let music = document.getElementById("myMusic");
let callSound = document.getElementById("callSound");


callSound.play();


    acceptcall.onclick = function(){
        popup.style.display = "none";
        music.play();
        callSound.pause();
    };

declinecall.onclick = function(){
    popup.style.display = "none";
    music.play();
    callSound.pause();
};


// Popup Js 
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("closeBtn");

closeBtn.onclick = function(){
    popup.style.display = "none";
};
