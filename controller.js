function onDisplayText()
{
    txt1 = document.getElementById("inp1").value;
    demo = document.getElementById("demo").innerHTML = txt1;
    // let demo = txt1

    txt1 = document.getElementById("inp1").value = "";
    // let txt1 = empty after click

    console.log(txt1);
}