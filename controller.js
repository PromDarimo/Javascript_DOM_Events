// onClick by event
function onDisplayText() {
    txt1 = document.getElementById("inp1").value;
    demo = document.getElementById("demo").innerHTML = txt1;
    // let demo = txt1

    txt1 = document.getElementById("inp1").value = "";
    // let txt1 = empty after click

    console.log(txt1);
}

// onClick by id
function displayDate() { // Function to display date
    document.getElementById("demo_date").innerHTML = Date();
    // Date() is build in in Javascript;
}

// Declared btn1 with id="btn1" and set event
btn1 = document.getElementById("btn1").onclick = displayDate;

// onLoad
function checkCookie() {
    let text = "";
    if (navigator.cookieEnabled == true) { //check is cookie is enable
        text = "Cookies are enabled.";
    } else {                               //id cookie is not enable
        text = "Cookies are not enabled."; 
    }
    document.getElementById("check-cookie").innerHTML = text;

    // onLoad can use for read data also
    let data = "data.json";     //let data = data.json file
    fetch(data)                 
        .then(x => x.text())
        .then(y => document.getElementById("data").innerHTML = y);
}

// onInput
function writeText() {
    inpTxt1 = document.getElementById("inpTxt1").value;

    // Live input
    txt1 = document.getElementById("display-text").innerHTML = inpTxt1;
    // let txt1 = inpTxt1
}

// onChange
function upperCase() { //make value in inpyt field to uppercase
    const x = document.getElementById("txtUp");
    x.value = x.value.toUpperCase();
}

// onMouseup
function onMouseup(){ 
    txt1 = document.getElementById("mouse-text"); //id from div
    txt1.style.backgroundColor = "orange";
    txt1.innerHTML = "Sunset";

}

// onMousedown
function onMousedown(){
    txt1 = document.getElementById("mouse-text"); //id from div
    txt1.style.backgroundColor = "gray";
    txt1.innerHTML = "Moon";
}

// onMousehover
function onMousehover(){
    txt1 = document.getElementById("hover-text"); //id from div
    txt1.style.backgroundColor = "gray";
    txt1.innerHTML = "Moon";
}

// onMouseout
function onMouseout(){
    txt1 = document.getElementById("hover-text"); //id from div
    txt1.style.backgroundColor = "orange";
    txt1.innerHTML = "Sunset";
}