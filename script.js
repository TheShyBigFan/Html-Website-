let telaviv = document.getElementById("telaviv");
let mossad = document.getElementById("mossad");
let idf = document.getElementById("idf");
let loans = document.getElementById("loans");

//Popup Handling
let acceptcall = document.getElementById("accept");
let declinecall = document.getElementById("decline");
let music = document.getElementById("myMusic");

    acceptcall.onclick = function(){
        popup.style.display = "none";
        music.play();
    };

declinecall.onclick = function(){
    popup.style.display = "none";
    music.play();
};


// Popup Js 
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("closeBtn");

closeBtn.onclick = function(){
    popup.style.display = "none";
};
