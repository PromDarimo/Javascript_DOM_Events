function onDisplayText()
{
    txt1 = document.getElementById("inp1").value;
    demo = document.getElementById("demo").innerHTML = txt1;
    // let demo = txt1

    txt1 = document.getElementById("inp1").value = "";
    // let txt1 = empty after click

    console.log(txt1);
}

// click by id

// Function to display date
function displayDate(){
    document.getElementById("demo_date").innerHTML = Date();
    // Date() is build in in Javascript;
}

// Declared btn1 with id="btn1" and set event
btn1 = document.getElementById("btn1").onclick = displayDate;